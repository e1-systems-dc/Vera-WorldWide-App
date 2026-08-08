export default {
  id: "guyana",
  name: "Guyana",
  dialects: [
    { id: "gy-english", name: "Guyanese English" },
    { id: "gy-creole", name: "Guyanese Creole" }
  ],

  speakingTutors: [
    { name: "Darren", vibe: "Warm, friendly" },
    { name: "Malik", vibe: "Relaxed, casual" },
    { name: "Andre", vibe: "Calm, steady" },
    { name: "Keisha", vibe: "Soft, supportive" },
    { name: "Aaliyah", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Guyanese English and Creole with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Wha you sayin'?", expand: "Add how you're feeling." },
    { answer: "Ah good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bess", meaning: "Great" },
    { term: "Ok", meaning: "Okay" },
    { term: "Nice up", meaning: "Make it better" }
  ],

  pronunciationNotes: [
    "Guyanese Creole has rhythmic intonation.",
    "English is widely spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music influences conversational rhythm."
  ]
};
