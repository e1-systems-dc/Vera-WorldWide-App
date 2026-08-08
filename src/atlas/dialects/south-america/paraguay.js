export default {
  id: "paraguay",
  name: "Paraguay",
  dialects: [
    { id: "py-spanish", name: "Paraguayan Spanish" },
    { id: "py-guarani", name: "Guaraní" }
  ],

  speakingTutors: [
    { name: "Diego", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Carlos", vibe: "Calm, steady" },
    { name: "Ana", vibe: "Soft, supportive" },
    { name: "María", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Mateo", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Paraguayan Spanish and Guaraní with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Qué tal?", expand: "Add how you're feeling." },
    { answer: "Iporã.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Che", meaning: "Hey" },
    { term: "Ok", meaning: "Okay" },
    { term: "Dale", meaning: "Go ahead" }
  ],

  pronunciationNotes: [
    "Guaraní has nasal vowels and unique consonant patterns.",
    "Spanish is spoken with Guaraní influence."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Bilingualism is common in daily life."
  ]
};
