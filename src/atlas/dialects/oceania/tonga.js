export default {
  id: "tonga",
  name: "Tonga",
  dialects: [
    { id: "to-tongan", name: "Tongan" },
    { id: "to-english", name: "Tongan English" }
  ],

  speakingTutors: [
    { name: "Sione", vibe: "Warm, friendly" },
    { name: "Mika", vibe: "Relaxed, casual" },
    { name: "Latu", vibe: "Calm, steady" },
    { name: "Mele", vibe: "Soft, supportive" },
    { name: "Ana", vibe: "Gentle, melodic" },
    { name: "Lani", vibe: "Warm, expressive" },
    { name: "Tasi", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Tongan with a warm, respectful tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Mālō e lelei", expand: "Add how you're feeling." },
    { answer: "Sai pē.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Sai", meaning: "Good" },
    { term: "Io", meaning: "Yes" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Tongan has open vowels and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Family and community shape conversation."
  ]
};
