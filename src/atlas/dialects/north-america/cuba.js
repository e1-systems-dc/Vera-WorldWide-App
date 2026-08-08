export default {
  id: "cuba",
  name: "Cuba",
  dialects: [
    { id: "cu-spanish", name: "Cuban Spanish" }
  ],

  speakingTutors: [
    { name: "Alejandro", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Rafael", vibe: "Calm, steady" },
    { name: "Camila", vibe: "Soft, supportive" },
    { name: "Daniela", vibe: "Gentle, melodic" },
    { name: "Lucía", vibe: "Warm, expressive" },
    { name: "Yoel", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Cuban Spanish with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "¿Qué bolá?", expand: "Add how you're feeling." },
    { answer: "Todo bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Asere", meaning: "Friend / dude" },
    { term: "Qué bolá", meaning: "What's up" },
    { term: "Dale", meaning: "Okay / go ahead" }
  ],

  pronunciationNotes: [
    "Cuban Spanish has soft consonants and rhythmic intonation.",
    "Syllables flow quickly and smoothly."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music and rhythm influence conversational style."
  ]
};
