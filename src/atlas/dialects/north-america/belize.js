export default {
  id: "belize",
  name: "Belize",
  dialects: [
    { id: "bz-english", name: "Belizean English" },
    { id: "bz-kriol", name: "Belizean Kriol" }
  ],

  speakingTutors: [
    { name: "Jaden", vibe: "Warm, friendly" },
    { name: "Malik", vibe: "Relaxed, casual" },
    { name: "Andre", vibe: "Calm, steady" },
    { name: "Keisha", vibe: "Soft, supportive" },
    { name: "Aaliyah", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Belizean English and Kriol with a warm, friendly tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "How you di go?", expand: "Add how you're feeling." },
    { answer: "Ah good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bwai", meaning: "Dude" },
    { term: "Nice up", meaning: "Make it better" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Belizean Kriol has rhythmic intonation.",
    "English is widely spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Multilingual switching is common."
  ]
};
