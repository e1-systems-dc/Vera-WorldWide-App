export default {
  id: "japan",
  name: "Japan",
  dialects: [
    { id: "jp-tokyo", name: "Standard Japanese (Tokyo)" },
    { id: "jp-kansai", name: "Kansai Japanese" }
  ],

  speakingTutors: [
    { name: "Haruki", vibe: "Calm, polite" },
    { name: "Yuta", vibe: "Friendly, relaxed" },
    { name: "Sora", vibe: "Gentle, steady" },
    { name: "Aiko", vibe: "Soft, supportive" },
    { name: "Mina", vibe: "Warm, expressive" },
    { name: "Rina", vibe: "Melodic, kind" },
    { name: "Daichi", vibe: "Structured, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Japanese with a polite, natural tone. Keep sentences simple and clear."
  },

  starterPhrases: [
    { answer: "元気ですか？", expand: "Add how you’re feeling." },
    { answer: "元気です。", expand: "Add a small detail about your day." }
  ],

  slang: [
    { term: "やばい", meaning: "Wow / intense / cool (context-based)" },
    { term: "マジで", meaning: "Seriously" },
    { term: "いいね", meaning: "Nice / sounds good" }
  ],

  pronunciationNotes: [
    "Japanese rhythm is steady; vowels are clear and even.",
    "Kansai speech can sound more playful and expressive."
  ],

  culturalNotes: [
    "Politeness levels change endings and word choice.",
    "Casual speech between friends is softer and shorter."
  ]
};
