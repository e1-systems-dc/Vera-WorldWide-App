export default {
  id: "monaco",
  name: "Monaco",
  dialects: [
    { id: "mc-french", name: "French" }
  ],

  speakingTutors: [
    { name: "Léo", vibe: "Warm, friendly" },
    { name: "Maxime", vibe: "Relaxed, casual" },
    { name: "Tom", vibe: "Calm, steady" },
    { name: "Chloé", vibe: "Soft, supportive" },
    { name: "Lina", vibe: "Gentle, melodic" },
    { name: "Anaïs", vibe: "Warm, expressive" },
    { name: "Noa", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice French with a warm, elegant tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Ça va ?", expand: "Add how you're feeling." },
    { answer: "Très bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Top", meaning: "Great" },
    { term: "Cool", meaning: "Nice" },
    { term: "Ça marche", meaning: "That works" }
  ],

  pronunciationNotes: [
    "Monégasque French is clear and smooth.",
    "Vowels are rounded and melodic."
  ],

  culturalNotes: [
    "Speech is polite and warm.",
    "French is the main everyday language."
  ]
};
