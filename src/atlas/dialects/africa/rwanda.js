export default {
  id: "rwanda",
  name: "Rwanda",
  dialects: [
    { id: "rw-kinyarwanda", name: "Kinyarwanda" },
    { id: "rw-french", name: "Rwandan French" },
    { id: "rw-english", name: "Rwandan English" }
  ],

  speakingTutors: [
    { name: "Jean-Paul", vibe: "Warm, calm" },
    { name: "Eric", vibe: "Friendly, steady" },
    { name: "Claude", vibe: "Relaxed, casual" },
    { name: "Aline", vibe: "Soft, supportive" },
    { name: "Chantal", vibe: "Warm, expressive" },
    { name: "Diane", vibe: "Gentle, melodic" },
    { name: "Patrick", vibe: "Clear, structured" },
    { name: "Josiane", vibe: "Calm, patient" },
    { name: "Fabrice", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Kinyarwanda with a warm, steady tone. Keep it calm and natural."
  },

  starterPhrases: [
    { answer: "Amakuru?", expand: "Add how you're doing." },
    { answer: "Ni meza.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sha", meaning: "Friend / bro" },
    { term: "Bite", meaning: "What's up" },
    { term: "Ni sawa", meaning: "It's okay" }
  ],

  pronunciationNotes: [
    "Kinyarwanda is smooth and non‑tonal.",
    "Speech is calm and steady."
  ],

  culturalNotes: [
    "Rwandan speech is polite and reserved.",
    "French and English influence varies by region."
  ]
};
