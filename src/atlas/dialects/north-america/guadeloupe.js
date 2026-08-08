export default {
  id: "guadeloupe",
  name: "Guadeloupe",
  dialects: [
    { id: "gp-french", name: "Guadeloupe French" },
    { id: "gp-creole", name: "Guadeloupe Creole" }
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
      "We will practice Guadeloupe French and Creole with a warm, melodic tone. Keep it expressive and natural."
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
    "Creole has rhythmic intonation.",
    "French is spoken with local influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music influences conversational rhythm."
  ]
};
