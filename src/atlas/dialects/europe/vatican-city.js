export default {
  id: "vatican-city",
  name: "Vatican City",
  dialects: [
    { id: "va-italian", name: "Italian" },
    { id: "va-latin", name: "Latin (educational only)" }
  ],

  speakingTutors: [
    { name: "Lorenzo", vibe: "Calm, friendly" },
    { name: "Matteo", vibe: "Relaxed, casual" },
    { name: "Nico", vibe: "Steady, patient" },
    { name: "Giulia", vibe: "Soft, supportive" },
    { name: "Sofia", vibe: "Gentle, melodic" },
    { name: "Mia", vibe: "Warm, expressive" },
    { name: "Leo", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Italian with a warm, neutral tone. Latin is included only for educational phrases."
  },

  starterPhrases: [
    { answer: "Come stai?", expand: "Add how you're feeling." },
    { answer: "Sto bene.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Ok", meaning: "Okay" },
    { term: "Bene", meaning: "Good" },
    { term: "Perfetto", meaning: "Perfect" }
  ],

  pronunciationNotes: [
    "Italian pronunciation is clear and melodic.",
    "Latin is taught with classical pronunciation."
  ],

  culturalNotes: [
    "Language use is primarily Italian.",
    "Latin appears in academic or ceremonial contexts."
  ]
};
