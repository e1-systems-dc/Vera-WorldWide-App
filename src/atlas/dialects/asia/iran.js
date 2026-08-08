export default {
  id: "iran",
  name: "Iran",
  dialects: [
    { id: "ir-persian", name: "Modern Persian (Farsi)" },
    { id: "ir-tehrani", name: "Tehrani Persian" }
  ],

  speakingTutors: [
    { name: "Arman", vibe: "Warm, modern Tehrani tone" },
    { name: "Sina", vibe: "Calm, steady" },
    { name: "Kian", vibe: "Relaxed, friendly" },
    { name: "Niloofar", vibe: "Soft, supportive" },
    { name: "Tara", vibe: "Warm, expressive" },
    { name: "Sara", vibe: "Gentle, melodic" },
    { name: "Reza", vibe: "Clear, structured" },
    { name: "Mahnaz", vibe: "Calm, patient" },
    { name: "Pouya", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Persian with a warm, poetic tone. Keep it smooth and expressive."
  },

  starterPhrases: [
    { answer: "Hale shoma chetore?", expand: "Add how you're feeling." },
    { answer: "Khoobam.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Bah bah", meaning: "Wow / nice" },
    { term: "Aali", meaning: "Great" },
    { term: "Fadâ", meaning: "My pleasure" }
  ],

  pronunciationNotes: [
    "Persian is non-tonal with soft consonants.",
    "Tehrani Persian uses a light 'r' sound."
  ],

  culturalNotes: [
    "Persian is known for poetic rhythm and expressive tone.",
    "Tehran speech is the modern standard."
  ]
};
