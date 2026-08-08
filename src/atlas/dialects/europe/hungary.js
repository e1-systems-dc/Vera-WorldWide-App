export default {
  id: "hungary",
  name: "Hungary",
  dialects: [
    { id: "hu-hungarian", name: "Hungarian" }
  ],

  speakingTutors: [
    { name: "Bence", vibe: "Warm, friendly" },
    { name: "Marcell", vibe: "Relaxed, casual" },
    { name: "Patrik", vibe: "Calm, steady" },
    { name: "Lili", vibe: "Soft, supportive" },
    { name: "Hanna", vibe: "Gentle, melodic" },
    { name: "Zita", vibe: "Warm, expressive" },
    { name: "Nimród", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Hungarian with a warm, steady tone. Keep it natural, friendly, and clear."
  },

  starterPhrases: [
    { answer: "Hogy vagy?", expand: "Add how you're feeling." },
    { answer: "Jól vagyok.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Király", meaning: "Cool / awesome" },
    { term: "Tök jó", meaning: "Really good" },
    { term: "Oké", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Hungarian has long and short vowels that change meaning.",
    "Stress is always on the first syllable.",
    "Consonants like 'gy', 'ty', and 'ny' have soft, palatal sounds."
  ],

  culturalNotes: [
    "Speech is warm but not overly fast.",
    "Directness is balanced with friendliness.",
    "Small talk often includes food, weather, or daily life."
  ]
};
