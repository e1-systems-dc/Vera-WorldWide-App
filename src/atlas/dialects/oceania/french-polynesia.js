export default {
  id: "french-polynesia",
  name: "French Polynesia",
  dialects: [
    { id: "pf-tahitian", name: "Tahitian" },
    { id: "pf-french", name: "French" }
  ],

  speakingTutors: [
    { name: "Mana", vibe: "Warm, friendly" },
    { name: "Aroha", vibe: "Relaxed, casual" },
    { name: "Tane", vibe: "Calm, steady" },
    { name: "Hina", vibe: "Soft, supportive" },
    { name: "Moana", vibe: "Gentle, melodic" },
    { name: "Riri", vibe: "Warm, expressive" },
    { name: "Koa", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Tahitian with a warm, melodic tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Ia ora na", expand: "Add how you're feeling." },
    { answer: "Maita'i.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Maita'i", meaning: "Good" },
    { term: "Ia ora na", meaning: "Hello" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Tahitian has open vowels and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Polynesian cultural influence is strong."
  ]
};
