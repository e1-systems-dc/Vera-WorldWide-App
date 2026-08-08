export default {
  id: "lebanon",
  name: "Lebanon",
  dialects: [
    { id: "lb-levantine", name: "Lebanese Levantine Arabic" }
  ],

  speakingTutors: [
    { name: "Elie", vibe: "Warm, Beirut modern tone" },
    { name: "Jad", vibe: "Friendly, upbeat" },
    { name: "Rami", vibe: "Calm, steady" },
    { name: "Maya", vibe: "Soft, supportive" },
    { name: "Rita", vibe: "Warm, expressive" },
    { name: "Nadine", vibe: "Gentle, melodic" },
    { name: "Toni", vibe: "Clear, structured" },
    { name: "Ralph", vibe: "Modern, friendly" },
    { name: "Lea", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Lebanese Arabic with a warm, expressive tone. Keep it melodic and natural."
  },

  starterPhrases: [
    { answer: "Keefak?", expand: "Add how you're doing." },
    { answer: "Mnih ktir.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yalla", meaning: "Let's go" },
    { term: "Shu", meaning: "What" },
    { term: "Ktir", meaning: "Very" }
  ],

  pronunciationNotes: [
    "Lebanese Arabic is musical and expressive.",
    "The 'q' often becomes a glottal stop."
  ],

  culturalNotes: [
    "Lebanese Arabic is widely recognized for its melodic tone.",
    "Beirut speech blends Arabic, French, and English."
  ]
};
