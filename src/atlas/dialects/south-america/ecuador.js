export default {
  id: "ecuador",
  name: "Ecuador",
  dialects: [
    { id: "ec-spanish", name: "Ecuadorian Spanish" }
  ],

  speakingTutors: [
    { name: "Andrés", vibe: "Warm, friendly" },
    { name: "José", vibe: "Relaxed, casual" },
    { name: "Luis", vibe: "Calm, steady" },
    { name: "María", vibe: "Soft, supportive" },
    { name: "Valeria", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Diego", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Ecuadorian Spanish with a warm, calm tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Qué más pues?", expand: "Add how you're feeling." },
    { answer: "Todo bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Achachay", meaning: "It's cold" },
    { term: "Bacán", meaning: "Cool" },
    { term: "Ya", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Ecuadorian Spanish is clear and steady.",
    "Speech rhythm is calm and friendly."
  ],

  culturalNotes: [
    "Speech is warm and polite.",
    "Small talk is common in daily life."
  ]
};
