export default {
  id: "spain",
  name: "Spain",
  dialects: [
    { id: "es-castilian", name: "Castilian Spanish" },
    { id: "es-catalan", name: "Catalan" },
    { id: "es-basque", name: "Basque" },
    { id: "es-galician", name: "Galician" }
  ],

  speakingTutors: [
    { name: "Hugo", vibe: "Warm, friendly" },
    { name: "Pablo", vibe: "Relaxed, casual" },
    { name: "Adrián", vibe: "Calm, steady" },
    { name: "Lucía", vibe: "Soft, supportive" },
    { name: "Claudia", vibe: "Gentle, melodic" },
    { name: "Irene", vibe: "Warm, expressive" },
    { name: "Nil", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Spanish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Cómo estás?", expand: "Add how you're feeling." },
    { answer: "Estoy bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Guay", meaning: "Cool" },
    { term: "Vale", meaning: "Okay" },
    { term: "Genial", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Castilian uses the 'th' sound for C/Z.",
    "Catalan and Basque have distinct phonetics."
  ],

  culturalNotes: [
    "Speech is expressive and warm.",
    "Small talk often includes food and daily life."
  ]
};
