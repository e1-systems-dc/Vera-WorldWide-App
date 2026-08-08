export default {
  id: "chiloe",
  name: "Chiloé",
  dialects: [
    { id: "cl-chilote", name: "Chilote Spanish" }
  ],

  speakingTutors: [
    { name: "Matías", vibe: "Warm, friendly" },
    { name: "Benjamín", vibe: "Relaxed, casual" },
    { name: "Diego", vibe: "Calm, steady" },
    { name: "Antonia", vibe: "Soft, supportive" },
    { name: "Camila", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Lucas", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Chilote Spanish with a warm, calm tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Cómo estai?", expand: "Add how you're feeling." },
    { answer: "Bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bacán", meaning: "Cool" },
    { term: "Ya", meaning: "Okay" },
    { term: "Po", meaning: "Emphasis particle" }
  ],

  pronunciationNotes: [
    "Chilote Spanish is soft and melodic.",
    "Speech rhythm is calm and friendly."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Island culture influences conversational style."
  ]
};
