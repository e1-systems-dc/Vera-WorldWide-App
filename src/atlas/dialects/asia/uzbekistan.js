export default {
  id: "uzbekistan",
  name: "Uzbekistan",
  dialects: [
    { id: "uz-uzbek", name: "Uzbek" },
    { id: "uz-russian", name: "Uzbekistani Russian" }
  ],

  speakingTutors: [
    { name: "Timur", vibe: "Warm, friendly" },
    { name: "Javlon", vibe: "Calm, steady" },
    { name: "Bekzod", vibe: "Relaxed, casual" },
    { name: "Dilnoza", vibe: "Soft, supportive" },
    { name: "Malika", vibe: "Warm, expressive" },
    { name: "Nigora", vibe: "Gentle, melodic" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Zara", vibe: "Clear, friendly" },
    { name: "Mira", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Uzbek with a warm, smooth tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Qalaysiz?", expand: "Add how you're doing." },
    { answer: "Yaxshi.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Zo'r", meaning: "Great" },
    { term: "Gap yo'q", meaning: "Perfect" },
    { term: "Brat", meaning: "Bro / friend" }
  ],

  pronunciationNotes: [
    "Uzbek is non-tonal with clear vowels.",
    "Russian influence is strong in urban areas."
  ],

  culturalNotes: [
    "Uzbekistan blends Turkic and Persian influences.",
    "Speech is warm, rhythmic, and expressive."
  ]
};
