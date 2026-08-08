import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { requirePaid } from "../middleware/requirePaid.js";
import { createConversation } from "../models/conversationModel.js";
import { createMessage } from "../models/messageModel.js";
import { db } from "../db/index.js";
import OpenAI from "openai";

const router = express.Router();

// Initialize OpenAI (or replace with your provider)
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", authMiddleware, requirePaid, async (req, res) => {
  try {
    const userId = req.user.id;
    const { message, language, sessionMode, practiceMode } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Find or create conversation
    let conversation = await db.query(
      "SELECT * FROM conversations WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1",
      [userId]
    );

    if (conversation.rows.length === 0) {
      conversation = { rows: [await createConversation(userId)] };
    }

    const conversationId = conversation.rows[0].id;

    // Save user message
    await createMessage(conversationId, "user", message);

    // Build AI prompt
    const systemPrompt = `
You are a language tutor for ${language.name} (${language.dialect}, ${language.continent}).
Session mode: ${sessionMode}
Practice mode: ${practiceMode}
Coach instructions: ${language.coachPrompt}
    `;

    // Call AI
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    // Save assistant message
    await createMessage(conversationId, "assistant", reply);

    res.json({
      conversationId,
      reply,
    });
  } catch (err) {
    console.error("Tutor error:", err);
    res.status(500).json({ error: "Tutor service failed" });
  }
});

export default router;
