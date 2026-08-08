export default {
  id: "senegal",
  name: "Senegal",
  dialects: [
    { id: "sn-wolof", name: "Wolof" },
    { id: "sn-pulaar", name: "Pulaar" },
    { id: "sn-serer", name: "Serer" },
    { id: "sn-french", name: "Senegalese French" }
  ],

  speakingTutors: [
    { name: "Mamadou", vibe: "Warm, classic Wolof tone" },
    { name: "Cheikh", vibe: "Calm, steady" },
    { name: "Ibrahima", vibe: "Friendly, expressive" },
    { name: "Awa", vibe: "Soft, supportive" },
    { name: "Fatou", vibe: "Warm, motherly" },
    { name: "Ndeye", vibe: "Gentle, melodic" },
    { name: "Khady", vibe: "Youthful, upbeat" },
    { name: "Samba", vibe: "Relaxed, casual" },
    { name: "Lamine", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Wolof with a warm, rhythmic tone. Keep it friendly and expressive."
  },

  starterPhrases: [
    { answer: "Nanga def?", expand: "Add how you're doing." },
    { answer: "Maangi fi rekk.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Baax na", meaning: "It's good" },
    { term: "Jërëjëf", meaning: "Thank you" },
    { term: "Nopp naa la", meaning: "I miss you" }
  ],

  pronunciationNotes: [
    "Wolof is non‑tonal with smooth consonants.",
    "Senegalese French has a distinct rhythm."
  ],

  culturalNotes: [
    "Wolof is the lingua franca of Senegal.",
    "Speech is warm, rhythmic, and expressive."
  ]
};
