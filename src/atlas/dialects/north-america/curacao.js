export default {
  id: "curacao",
  name: "Curaçao",
  dialects: [
    { id: "cw-papiamento", name: "Papiamento" },
    { id: "cw-dutch", name: "Dutch" },
    { id: "cw-english", name: "Curaçao English" }
  ],

  speakingTutors: [
    { name: "Jayden", vibe: "Warm, friendly" },
    { name: "Malik", vibe: "Relaxed, casual" },
    { name: "Rico", vibe: "Calm, steady" },
    { name: "Aisha", vibe: "Soft, supportive" },
    { name: "Liana", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Papiamento with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Kon ta bai?", expand: "Add how you're feeling." },
    { answer: "Mi ta bon.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Dushi", meaning: "Sweet / nice / good" },
    { term: "Bon", meaning: "Good" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Papiamento blends Portuguese, Spanish, Dutch, and African influences.",
    "Speech is rhythmic and melodic."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Multilingual switching is common."
  ]
};
