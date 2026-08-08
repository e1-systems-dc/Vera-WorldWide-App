import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import Stripe from 'stripe';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

console.log("--> [1/5] Booting up Vera Backend...");
dotenv.config();

console.log("--> [2/5] Initializing Firebase Admin VIP Access...");
let db;
try {
  const serviceAccount = JSON.parse(fs.readFileSync('./firebase-key.json', 'utf8'));
  initializeApp({
    credential: cert(serviceAccount)
  });
  db = getFirestore();
  console.log("--> [3/5] Firebase connected successfully!");
} catch (error) {
  console.error("\n❌ FIREBASE ERROR:");
  console.error("Could not read 'firebase-key.json'. Make sure the file is inside the 'backend' folder and named exactly 'firebase-key.json'.");
  console.error("Technical details:", error.message, "\n");
  process.exit(1);
}

console.log("--> [4/5] Configuring API Routes & Stripe...");
const app = express();
app.use(cors());

// --- STRIPE WEBHOOK (Must use raw JSON) ---
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock_key');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_mock_secret';

app.post('/api/webhook', express.raw({type: 'application/json'}), async (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.client_reference_id;
    const purchasedTier = session.amount_total >= 999 ? 'premium' : 'plus';
    const newEnergy = purchasedTier === 'premium' ? 999 : 15;

    if (userId) {
      console.log(`Upgrading User ${userId} to ${purchasedTier}...`);
      await db.collection('artifacts/vera-worldwide-v1/users').doc(userId).update({
        tier: purchasedTier,
        energy: newEnergy
      });
      console.log("Upgrade complete.");
    }
  }
  response.send();
});

// Use standard JSON for all other routes
app.use(express.json());

// --- OPENROUTER CONFIGURATION ---
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", 
    "X-Title": "Vera Worldwide", 
  }
});

// --- APP ENDPOINTS ---
app.post('/api/placement', async (req, res) => {
  const { targetDialect, nativeLanguage } = req.body;
  try {
    const prompt = `Generate a 4-question multiple-choice language placement quiz for a ${nativeLanguage} speaker learning ${targetDialect}. Return ONLY a valid JSON object in this format: { "questions": [ { "prompt": "Question", "options": ["Op1", "Op2", "Op3", "Op4"], "correctAnswer": "Op1" } ] }`;
    const completion = await openai.chat.completions.create({ 
      model: "openai/gpt-4o-mini", 
      messages: [{ role: "system", content: prompt }], 
      response_format: { type: "json_object" }
    });
    res.json({ success: true, data: JSON.parse(completion.choices[0].message.content) });
  } catch (error) { res.status(500).json({ success: false, error: "Failed to generate matrix." }); }
});

app.post('/api/chat', async (req, res) => {
  const { userMessage, targetDialect, userCefrLevel, scenario, chatHistory } = req.body;
  try {
    let systemPrompt = scenario === 'boss' 
      ? `You are a strict native speaker in a high-stakes scenario. Speak 100% in ${targetDialect}. Apply social pressure.` 
      : `You are Vera, a highly supportive, natural conversational partner practicing ${targetDialect} at a ${userCefrLevel} level. Speak 100% in ${targetDialect}. Keep responses concise.`;
    
    const messages = [{ role: "system", content: systemPrompt }, ...chatHistory, { role: "user", content: userMessage }];

    const [chatResponse, gradingResponse] = await Promise.all([
      openai.chat.completions.create({ model: "openai/gpt-4o", messages: messages }),
      openai.chat.completions.create({ model: "openai/gpt-4o-mini", response_format: { type: "json_object" }, messages: [{ role: "system", content: `Evaluate user message: "${userMessage}" in ${targetDialect}. Return JSON: {"isComprehensible": true/false, "grammarGaps": ["errors"], "adaptiveHint": "Short hint in English", "fluencyScore": 1-100}` }] })
    ]);

    res.json({ success: true, data: { aiResponse: chatResponse.choices[0].message.content, analysis: JSON.parse(gradingResponse.choices[0].message.content) } });
  } catch (error) { res.status(500).json({ success: false, error: "Neural Engine Disconnected." }); }
});

app.post('/api/tts', async (req, res) => {
  res.status(501).json({ error: "TTS requires direct OpenAI key. Falling back to browser voice." });
});

app.post('/api/checkout', async (req, res) => {
  const { tier, userId } = req.body;
  try {
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes('mock')) {
      return res.json({ success: true, url: `http://localhost:5173/?success=true&tier=${tier}` });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: `Vera Worldwide - ${tier.toUpperCase()} Tier` },
          unit_amount: tier === 'premium' ? 999 : 499,
          recurring: { interval: 'month' }
        },
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `http://localhost:5173/?success=true&tier=${tier}`, 
      cancel_url: `http://localhost:5173/`,
      client_reference_id: userId,
    });
    res.json({ success: true, url: session.url });
  } catch (error) { res.status(500).json({ success: false, error: "Payment Gateway Failed" }); }
});

console.log("--> [5/5] Igniting Server...");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`\n🚀 Vera Neural Engine is LIVE and listening on port ${PORT}\n`));