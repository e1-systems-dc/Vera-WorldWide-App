export default {
  id: "singapore",
  name: "Singapore",
  dialects: [
    { id: "sg-english", name: "Singapore English" },
    { id: "sg-singlish", name: "Singlish" }
  ],

  speakingTutors: [
    { name: "Ethan", vibe: "Warm, clear" },
    { name: "Jared", vibe: "Relaxed, casual" },
    { name: "Kai", vibe: "Modern, upbeat" },
    { name: "Mei", vibe: "Soft, supportive" },
    { name: "Shan", vibe: "Gentle, melodic" },
    { name: "Lena", vibe: "Warm, expressive" },
    { name: "Aaron", vibe: "Structured, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Singapore English with a clear, friendly tone. Keep it natural and concise."
  },

  starterPhrases: [
    { answer: "How’s everything?", expand: "Add how you’re feeling." },
    { answer: "Pretty good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Lah", meaning: "Softener / emphasis" },
    { term: "Shiok", meaning: "Very enjoyable / satisfying" },
    { term: "Can", meaning: "Yes / it’s possible" }
  ],

  pronunciationNotes: [
    "Singapore English has its own rhythm and intonation.",
    "Singlish uses particles like ‘lah’, ‘lor’, ‘meh’."
  ],

  culturalNotes: [
    "Speech is efficient but often warm and humorous.",
    "Mixing languages in casual talk is common."
  ]
};
