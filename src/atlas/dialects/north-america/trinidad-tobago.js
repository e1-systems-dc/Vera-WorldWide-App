export default {
  id: "trinidad-tobago",
  name: "Trinidad & Tobago",
  dialects: [
    { id: "tt-english", name: "Trinidadian English" },
    { id: "tt-creole", name: "Trinidadian Creole" }
  ],

  speakingTutors: [
    { name: "Kareem", vibe: "Warm, friendly" },
    { name: "Darius", vibe: "Relaxed, casual" },
    { name: "Andre", vibe: "Calm, steady" },
    { name: "Keisha", vibe: "Soft, supportive" },
    { name: "Aaliyah", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Trinidadian English and Creole with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Wha happening?", expand: "Add how you're feeling." },
    { answer: "Ah good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Lime", meaning: "Hang out" },
    { term: "Bess", meaning: "Great" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Trinidadian English has melodic rhythm and soft consonants.",
    "Creole influences vocabulary and intonation."
  ],

  culturalNotes: [
    "Speech is lively and warm.",
    "Music influences conversational rhythm."
  ]
};
