import OpenAI from "openai";

// OpenRouter uses the exact same SDK as OpenAI
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", // Replace with your live URL later
    "X-Title": "HBDH Application", // Identifies your app on OpenRouter
  }
});

export async function createTutorResponse({
  message,
  language,
  sessionMode,
  practiceMode,
}) {
  
  // Preserving the exact regional dialect is the core directive
  const systemPrompt = `
You are Vera, a neural adaptive language tutor.
You are teaching ${language?.name || "the target language"}.
Specific Dialect/Variant: ${language?.dialect || "Standard"} (${language?.continent || "Global"}).

Crucial Rule: Preserving regional dialects is the primary feature of this application. You MUST use accurate local street slang, idioms, and cultural inflections of the specified dialect. Never default to generic or standard phrasing if a regional alternative exists.
Coach Instructions: ${language?.coachPrompt || "Be supportive and conversational."}

Session mode: ${sessionMode || "guided"}
Practice mode: ${practiceMode || "conversation"}

Formatting Rule: If the user makes a phonetic mistake or phrasing error, provide a gentle correction in brackets at the end of your response, like this: [Tip: In ${language?.dialect || "this dialect"}, locals usually say...]. Keep your response brief and natural.
`;

  try {
    const completion = await client.chat.completions.create({
    
      // This string targets a completely free Llama 3 model on OpenRouter
      model: "meta-llama/llama-3-8b-instruct:free", 
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    throw error;
  }
}