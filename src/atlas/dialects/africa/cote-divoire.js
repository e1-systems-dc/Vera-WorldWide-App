export default {
  id: "cote-divoire",
  name: "Côte d’Ivoire",
  dialects: [
    { id: "ci-baule", name: "Baoulé" },
    { id: "ci-dioula", name: "Dioula" },
    { id: "ci-bete", name: "Bété" },
    { id: "ci-nouchi", name: "Nouchi (Urban Slang)" }
  ],

  speakingTutors: [
    { name: "Yao", vibe: "Warm, friendly" },
    { name: "Koffi", vibe: "Calm, steady" },
    { name: "Souleymane", vibe: "Relaxed, casual" },
    { name: "Aminata", vibe: "Soft, supportive" },
    { name: "Adjoba", vibe: "Youthful, upbeat" },
    { name: "Mariam", vibe: "Warm, expressive" },
    { name: "Ismael", vibe: "Modern, friendly" },
    { name: "Djeneba", vibe: "Gentle, melodic" },
    { name: "Seydou", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Ivorian languages with a warm, rhythmic tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Ça va?", expand: "Add how you're doing." },
    { answer: "On est là.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Gbê", meaning: "Truth" },
    { term: "Faut pas fâcher", meaning: "Don't be mad" },
    { term: "Djo", meaning: "Dude" }
  ],

  pronunciationNotes: [
    "Nouchi blends French with local languages.",
    "Baoulé has smooth vowel transitions."
  ],

  culturalNotes: [
    "Nouchi is widely used in Abidjan youth culture.",
    "Côte d’Ivoire has strong musical influence in speech."
  ]
};
