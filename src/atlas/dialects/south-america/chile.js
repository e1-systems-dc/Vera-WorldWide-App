export default {
  id: "chile",
  name: "Chile",
  dialects: [
    { id: "cl-spanish", name: "Chilean Spanish" }
  ],

  speakingTutors: [
    { name: "Matías", vibe: "Warm, friendly" },
    { name: "Benjamín", vibe: "Relaxed, casual" },
    { name: "Diego", vibe: "Calm, steady" },
    { name: "Antonia", vibe: "Soft, supportive" },
    { name: "Camila", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Lucas", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Chilean Spanish with a warm, lively tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "¿Cómo estai?", expand: "Add how you're feeling." },
    { answer: "Bien po.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Po", meaning: "Emphasis particle" },
    { term: "Bacán", meaning: "Cool" },
    { term: "Ya", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Chilean Spanish is fast and expressive.",
    "Final consonants are often softened."
  ],

  culturalNotes: [
    "Speech is lively and warm.",
    "Humor is common in conversation."
  ]
};
