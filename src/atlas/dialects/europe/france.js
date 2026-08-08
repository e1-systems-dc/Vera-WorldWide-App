export default {
  id: "france",
  name: "France",
  dialects: [
    { id: "fr-french", name: "French" }
  ],

  speakingTutors: [
    { name: "Lucas", vibe: "Warm, friendly" },
    { name: "Mathis", vibe: "Relaxed, casual" },
    { name: "Enzo", vibe: "Calm, steady" },
    { name: "Léa", vibe: "Soft, supportive" },
    { name: "Camille", vibe: "Gentle, melodic" },
    { name: "Inès", vibe: "Warm, expressive" },
    { name: "Noa", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice French with a warm, natural tone. Keep it smooth and expressive."
  },

  starterPhrases: [
    { answer: "Ça va ?", expand: "Add how you're feeling." },
    { answer: "Ça va bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Cool", meaning: "Nice / good" },
    { term: "Ça marche", meaning: "That works" },
    { term: "Tranquille", meaning: "Chill / relaxed" }
  ],

  pronunciationNotes: [
    "French has nasal vowels and smooth rhythm.",
    "Final consonants are often silent."
  ],

  culturalNotes: [
    "Speech is expressive but not rushed.",
    "Small talk often includes food or daily life."
  ]
};
