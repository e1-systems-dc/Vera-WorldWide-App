import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openrouter = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  // Pulls securely from your .env file so bots don't steal your credits!
  apiKey: process.env.OPENROUTER_API_KEY, 
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Vera Worldwide",
  },
});

class AIService {
  // ======================================================================
  // 1. THE DUAL-BRAIN CHAT ENGINE (Premium Sandbox vs Structured Lesson)
  // ======================================================================
  async generateTutorResponse({ userMessage, targetDialect, nativeLanguage, userCefrLevel, scenario, lessonTitle, userName, chatHistory }) {
    try {
      let systemPrompt = "";

      // BRAIN A: THE PREMIUM OMNISCIENT TUTOR (Unlocked Sandbox)
      if (scenario === 'premium_sandbox') {
        systemPrompt = `
          [SYSTEM PROMPT: VERA OMNISCIENT MENTOR - PREMIUM MODE]
          You are Vera, an elite, highly intelligent personal language tutor for ${targetDialect}. 
          The user is a Premium subscriber asking you for help, explanations, or open conversation.
          User Level: ${userCefrLevel || 'A1'}
          Native Language: ${nativeLanguage || 'English'}
          
          DIRECTIVES FOR TEACHING:
          1. Be incredibly helpful, warm, and deeply educational. 
          2. If they ask a question in English (e.g., "How do I say X?"), answer them clearly in English, but provide extensive, accurate examples in ${targetDialect}.
          3. TRANSLATION RULE: If you speak a sentence in ${targetDialect}, immediately provide the English translation in parentheses so they aren't lost.
          4. THE LIFELINE: If you ask them a question in ${targetDialect} to keep the conversation going, always provide 2 or 3 examples of how they could reply!
        `;
      } 
      // BRAIN B: THE STRUCTURED SYLLABUS LESSON (The Duolingo Killer Core)
      else {
        systemPrompt = `
          [SYSTEM PROMPT: VERA STRUCTURED LESSON ENGINE]
          You are running a highly structured language lesson in ${targetDialect}. 
          Current Lesson Objective: ${lessonTitle || scenario || 'Standard Immersion'}
          User Level: ${userCefrLevel || 'A1'}

          DIRECTIVES:
          1. You are leading this exercise. Stay in character for the scenario. Do not act like an AI.
          2. Speak in ${targetDialect}. If the user is A1/A2, provide an English translation of your own sentences in [brackets].
          3. Actively guide them toward the lesson objective. Do not let them change the subject.
          4. End every message with a clear, simple prompt or challenge on what they should try to say next to complete the objective.
        `;
      }

      // Format history safely for OpenAI to cure amnesia
      const formattedHistory = (chatHistory || []).map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }));

      const completion = await openrouter.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...formattedHistory
        ],
        temperature: scenario === 'premium_sandbox' ? 0.7 : 0.4, // Less creative during strict lessons
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error("OpenRouter Generation Error:", error.message);
      return "Lo siento, la red neural está sincronizando. (Tutor offline)";
    }
  }

  // ======================================================================
  // 2. THE BACKGROUND MESSAGE ANALYZER (Invisible Grader)
  // ======================================================================
  async analyzeUserMessage({ userMessage, targetDialect }) {
    try {
      const completion = await openrouter.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Analyze this ${targetDialect} sentence: "${userMessage}". Respond ONLY with a valid JSON object containing these exact keys: {"isComprehensible": boolean, "grammarGaps": ["string", "string"], "adaptiveHint": "string", "fluencyScore": number}. No markdown.`
          },
          { role: "user", content: userMessage }
        ],
        response_format: { type: "json_object" }
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      return { isComprehensible: true, grammarGaps: [], adaptiveHint: "Keep going!", fluencyScore: 85 };
    }
  }

  // ======================================================================
  // 3. THE CALIBRATION MATRIX (Dynamic Placement Quiz Generator)
  // ======================================================================
  async generatePlacementQuiz({ targetDialect, nativeLanguage }) {
    try {
      const systemPrompt = `
        [SYSTEM PROMPT: VERA CALIBRATION MATRIX]
        You are the Vera Worldwide Assessment Engine. 
        Create a 5-question multiple-choice placement test for a native ${nativeLanguage || 'English'} speaker learning ${targetDialect}.
        
        CRITICAL RULES:
        1. The questions MUST escalate in difficulty exactly in this order: A1, A2, B1, B2, C1.
        2. Question 1 (A1) should be basic greetings/understanding. Question 5 (C1) should be complex grammar, idioms, or cultural nuance.
        3. All 'prompts' should be in ${nativeLanguage || 'English'} asking them to identify the correct ${targetDialect} phrase, OR a fill-in-the-blank in ${targetDialect}.
        
        You MUST respond ONLY with a valid JSON object matching this exact schema. No markdown, no extra text:
        {
          "questions": [
            {
              "level": "A1",
              "prompt": "How do you say 'Hello, how are you?'",
              "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
              "correctAnswer": "Option 2"
            }
          ]
        }
      `;

      const completion = await openrouter.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "system", content: systemPrompt }],
        response_format: { type: "json_object" },
        temperature: 0.3 // Low temp to ensure strict JSON formatting
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error("Placement Quiz Generation Error:", error.message);
      throw error;
    }
  }
}

export default new AIService();