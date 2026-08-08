export default {
  id: "turkey",
  name: "Turkey",
  dialects: [
    { id: "tr-turkish", name: "Turkish" }
  ],

  speakingTutors: [
    { name: "Emir", vibe: "Warm, friendly" },
    { name: "Kerem", vibe: "Relaxed, casual" },
    { name: "Mert", vibe: "Calm, steady" },
    { name: "Elif", vibe: "Soft, supportive" },
    { name: "Zeynep", vibe: "Gentle, melodic" },
    { name: "Derya", vibe: "Warm, expressive" },
    { name: "Arda", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Turkish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Nasılsın?", expand: "Add how you're feeling." },
    { answer: "İyiyim.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Harika", meaning: "Great" },
    { term: "Süper", meaning: "Awesome" },
    { term: "Tamam", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Turkish has vowel harmony and soft consonants.",
    "Stress usually falls on the last syllable."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality is central to conversation."
  ]
};
