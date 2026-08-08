export default {
  id: "ukraine",
  name: "Ukraine",
  dialects: [
    { id: "ua-ukrainian", name: "Ukrainian" }
  ],

  speakingTutors: [
    { name: "Danylo", vibe: "Warm, friendly" },
    { name: "Maksym", vibe: "Relaxed, casual" },
    { name: "Oleh", vibe: "Calm, steady" },
    { name: "Kateryna", vibe: "Soft, supportive" },
    { name: "Sofiia", vibe: "Gentle, melodic" },
    { name: "Iryna", vibe: "Warm, expressive" },
    { name: "Taras", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Ukrainian with a warm, melodic tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Як ти?", expand: "Add how you're feeling." },
    { answer: "Добре.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Круто", meaning: "Cool" },
    { term: "Норм", meaning: "Okay" },
    { term: "Супер", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Ukrainian has open vowels and soft consonants.",
    "Stress varies by word and must be learned individually."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality and kindness are central to conversation."
  ]
};
