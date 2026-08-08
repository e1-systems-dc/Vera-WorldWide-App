export default {
  id: "norway",
  name: "Norway",
  dialects: [
    { id: "no-bokmal", name: "Bokmål" },
    { id: "no-nynorsk", name: "Nynorsk" }
  ],

  speakingTutors: [
    { name: "Sander", vibe: "Calm, friendly" },
    { name: "Henrik", vibe: "Relaxed, casual" },
    { name: "Marius", vibe: "Steady, patient" },
    { name: "Ingrid", vibe: "Soft, supportive" },
    { name: "Nora", vibe: "Warm, expressive" },
    { name: "Thea", vibe: "Gentle, melodic" },
    { name: "Liam", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Norwegian with a warm, clear tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "Hvordan går det?", expand: "Add how you're feeling." },
    { answer: "Det går bra.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Kult", meaning: "Cool" },
    { term: "Digg", meaning: "Nice / tasty" },
    { term: "Okei", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Norwegian has musical intonation patterns.",
    "Bokmål is widely used; Nynorsk varies by region."
  ],

  culturalNotes: [
    "Speech is calm and friendly.",
    "Directness is balanced with politeness."
  ]
};
