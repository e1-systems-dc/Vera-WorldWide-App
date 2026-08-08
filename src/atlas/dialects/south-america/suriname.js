export default {
  id: "suriname",
  name: "Suriname",
  dialects: [
    { id: "sr-dutch", name: "Surinamese Dutch" },
    { id: "sr-sranan", name: "Sranan Tongo" },
    { id: "sr-english", name: "Surinamese English" }
  ],

  speakingTutors: [
    { name: "Rico", vibe: "Warm, friendly" },
    { name: "Jayden", vibe: "Relaxed, casual" },
    { name: "Malik", vibe: "Calm, steady" },
    { name: "Aisha", vibe: "Soft, supportive" },
    { name: "Liana", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Sranan Tongo and Dutch with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Fa waka?", expand: "Add how you're feeling." },
    { answer: "Mi de faya.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Faya", meaning: "Good / cool" },
    { term: "Ok", meaning: "Okay" },
    { term: "Bun", meaning: "Good" }
  ],

  pronunciationNotes: [
    "Sranan Tongo has rhythmic intonation and smooth vowels.",
    "Dutch is spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Multilingual switching is common."
  ]
};
