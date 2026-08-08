export default {
  id: "saudi-arabia",
  name: "Saudi Arabia",
  dialects: [
    { id: "sa-gulf-arabic", name: "Gulf Arabic (Saudi)" },
    { id: "sa-hejazi", name: "Hejazi Arabic" },
    { id: "sa-najdi", name: "Najdi Arabic" }
  ],

  speakingTutors: [
    { name: "Rayan", vibe: "Warm, modern Riyadh tone" },
    { name: "Faisal", vibe: "Calm, steady" },
    { name: "Saif", vibe: "Relaxed, friendly" },
    { name: "Layan", vibe: "Soft, supportive" },
    { name: "Dana", vibe: "Warm, expressive" },
    { name: "Reem", vibe: "Gentle, melodic" },
    { name: "Yousef", vibe: "Clear, structured" },
    { name: "Noura", vibe: "Calm, patient" },
    { name: "Mishal", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Saudi Arabic with a warm, modern tone. Keep responses friendly, clear, and natural."
  },

  starterPhrases: [
    { answer: "Kif halak?", expand: "Add how you're feeling." },
    { answer: "Ana tamam.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yaani", meaning: "Like / you know" },
    { term: "Marra", meaning: "Very" },
    { term: "Zain", meaning: "Good" }
  ],

  pronunciationNotes: [
    "Najdi Arabic uses a strong 'q' sound.",
    "Hejazi Arabic is softer and more melodic."
  ],

  culturalNotes: [
    "Saudi dialects vary strongly by region.",
    "Modern Saudi speech blends Arabic and English loanwords."
  ]
};
