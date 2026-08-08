export default {
  id: "gambia",
  name: "Gambia",
  dialects: [
    { id: "gm-wolof", name: "Wolof (Gambian)" },
    { id: "gm-mandinka", name: "Mandinka" },
    { id: "gm-fula", name: "Fula" },
    { id: "gm-english", name: "Gambian English" }
  ],

  speakingTutors: [
    { name: "Ebrima", vibe: "Warm, friendly" },
    { name: "Modou", vibe: "Calm, steady" },
    { name: "Lamin", vibe: "Relaxed, casual" },
    { name: "Isatou", vibe: "Soft, supportive" },
    { name: "Fatoumata", vibe: "Warm, motherly" },
    { name: "Mariama", vibe: "Gentle, melodic" },
    { name: "Sainey", vibe: "Youthful, upbeat" },
    { name: "Abdou", vibe: "Friendly, expressive" },
    { name: "Haddy", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Gambian languages with a warm, gentle tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Nanga def?", expand: "Add how you're doing." },
    { answer: "Mangi fi.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Nice one", meaning: "Good job" },
    { term: "Small small", meaning: "Slowly / gently" },
    { term: "No wahala", meaning: "No problem" }
  ],

  pronunciationNotes: [
    "Gambian Wolof is softer than Senegalese Wolof.",
    "Mandinka has gentle consonants."
  ],

  culturalNotes: [
    "Gambian speech is known for politeness and warmth.",
    "English is widely spoken with a soft accent."
  ]
};
