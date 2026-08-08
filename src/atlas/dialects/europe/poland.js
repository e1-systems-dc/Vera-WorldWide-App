export default {
  id: "poland",
  name: "Poland",
  dialects: [
    { id: "pl-polish", name: "Polish" }
  ],

  speakingTutors: [
    { name: "Kacper", vibe: "Warm, friendly" },
    { name: "Oskar", vibe: "Relaxed, casual" },
    { name: "Mateusz", vibe: "Calm, steady" },
    { name: "Zuzanna", vibe: "Soft, supportive" },
    { name: "Lena", vibe: "Gentle, melodic" },
    { name: "Maja", vibe: "Warm, expressive" },
    { name: "Igor", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Polish with a warm, clear tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "Jak się masz?", expand: "Add how you're feeling." },
    { answer: "Dobrze.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Spoko", meaning: "Cool / okay" },
    { term: "Fajnie", meaning: "Nice" },
    { term: "Super", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Polish has nasal vowels and consonant clusters.",
    "Stress is usually on the second-to-last syllable."
  ],

  culturalNotes: [
    "Speech is warm and polite.",
    "Small talk often includes weather or daily life."
  ]
};
