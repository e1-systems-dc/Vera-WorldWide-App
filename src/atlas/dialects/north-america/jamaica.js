export default {
  id: "jamaica",
  name: "Jamaica",
  dialects: [
    { id: "jm-english", name: "Jamaican English" },
    { id: "jm-patois", name: "Jamaican Patois" }
  ],

  speakingTutors: [
    { name: "Darius", vibe: "Warm, friendly" },
    { name: "Malik", vibe: "Relaxed, casual" },
    { name: "Andre", vibe: "Calm, steady" },
    { name: "Keisha", vibe: "Soft, supportive" },
    { name: "Aaliyah", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Jamaican English and Patois with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Wah gwaan?", expand: "Add how you're feeling." },
    { answer: "Mi good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Irie", meaning: "Good / cool" },
    { term: "Bless up", meaning: "Respect / hello" },
    { term: "Ya man", meaning: "Okay / yes" }
  ],

  pronunciationNotes: [
    "Patois has rhythmic intonation and unique grammar.",
    "English is widely spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music heavily influences conversational rhythm."
  ]
};
