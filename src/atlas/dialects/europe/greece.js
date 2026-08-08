export default {
  id: "greece",
  name: "Greece",
  dialects: [
    { id: "gr-greek", name: "Greek" }
  ],

  speakingTutors: [
    { name: "Nikos", vibe: "Warm, friendly" },
    { name: "Giorgos", vibe: "Relaxed, casual" },
    { name: "Manos", vibe: "Calm, steady" },
    { name: "Eleni", vibe: "Soft, supportive" },
    { name: "Maria", vibe: "Gentle, melodic" },
    { name: "Iris", vibe: "Warm, expressive" },
    { name: "Aris", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Greek with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Τι κάνεις;", expand: "Add how you're feeling." },
    { answer: "Καλά είμαι.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Τέλεια", meaning: "Perfect" },
    { term: "Ωραία", meaning: "Nice" },
    { term: "Οκ", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Greek has clear vowels and rolled R’s.",
    "Stress is always marked in writing."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality is reflected in conversation."
  ]
};
