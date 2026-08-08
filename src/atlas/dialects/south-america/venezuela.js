export default {
  id: "venezuela",
  name: "Venezuela",
  dialects: [
    { id: "ve-spanish", name: "Venezuelan Spanish" }
  ],

  speakingTutors: [
    { name: "Luis", vibe: "Warm, friendly" },
    { name: "Carlos", vibe: "Relaxed, casual" },
    { name: "Javier", vibe: "Calm, steady" },
    { name: "Mariana", vibe: "Soft, supportive" },
    { name: "Valeria", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Diego", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Venezuelan Spanish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Qué hubo?", expand: "Add how you're feeling." },
    { answer: "Todo fino.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Chamo", meaning: "Friend" },
    { term: "Fino", meaning: "Cool / good" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Venezuelan Spanish is melodic and expressive.",
    "Speech rhythm is lively and warm."
  ],

  culturalNotes: [
    "Speech is expressive and friendly.",
    "Humor is common in conversation."
  ]
};
