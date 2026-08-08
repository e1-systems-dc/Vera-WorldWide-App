export default {
  id: "cyprus",
  name: "Cyprus",
  dialects: [
    { id: "cy-greek", name: "Cypriot Greek" },
    { id: "cy-turkish", name: "Cypriot Turkish" }
  ],

  speakingTutors: [
    { name: "Andreas", vibe: "Warm, friendly" },
    { name: "Marios", vibe: "Relaxed, casual" },
    { name: "Yiannis", vibe: "Calm, steady" },
    { name: "Elena", vibe: "Soft, supportive" },
    { name: "Maria", vibe: "Gentle, melodic" },
    { name: "Selin", vibe: "Warm, expressive" },
    { name: "Deniz", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Cypriot Greek and Turkish with a warm, friendly tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Τι κάνεις;", expand: "Add how you're feeling." },
    { answer: "İyiyim.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Έλα ρε", meaning: "Come on / really?" },
    { term: "Süper", meaning: "Great" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Cypriot Greek has softer consonants and unique intonation.",
    "Cypriot Turkish blends local influences."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality is a shared cultural value."
  ]
};
