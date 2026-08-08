export default {
  id: "turkey",
  name: "Turkey",
  dialects: [
    { id: "tr-turkish", name: "Modern Turkish" }
  ],

  speakingTutors: [
    { name: "Emre", vibe: "Warm, friendly" },
    { name: "Can", vibe: "Calm, steady" },
    { name: "Burak", vibe: "Relaxed, casual" },
    { name: "Ece", vibe: "Soft, supportive" },
    { name: "Melis", vibe: "Warm, expressive" },
    { name: "Selin", vibe: "Gentle, melodic" },
    { name: "Kerem", vibe: "Clear, structured" },
    { name: "Deniz", vibe: "Calm, patient" },
    { name: "Mert", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Turkish with a warm, modern tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Nasılsın?", expand: "Add how you're feeling." },
    { answer: "İyiyim.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Kanka", meaning: "Bro / buddy" },
    { term: "Harika", meaning: "Great" },
    { term: "Tamam", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Turkish is vowel-harmonic and smooth.",
    "Stress usually falls on the last syllable."
  ],

  culturalNotes: [
    "Turkish blends European and Middle Eastern influences.",
    "Speech is warm, expressive, and rhythmic."
  ]
};
