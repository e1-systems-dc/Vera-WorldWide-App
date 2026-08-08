export default {
  id: "grenada",
  name: "Grenada",
  dialects: [
    { id: "gd-english", name: "Grenadian English" },
    { id: "gd-creole", name: "Grenadian Creole English" }
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
      "We will practice Grenadian English and Creole with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Wha you sayin'?", expand: "Add how you're feeling." },
    { answer: "Ah good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Jus' so", meaning: "Just like that" },
    { term: "Bess", meaning: "Great" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Grenadian Creole has rhythmic intonation.",
    "English is widely spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music and rhythm influence conversational style."
  ]
};
