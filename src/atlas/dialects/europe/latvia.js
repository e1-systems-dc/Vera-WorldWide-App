export default {
  id: "latvia",
  name: "Latvia",
  dialects: [
    { id: "lv-latvian", name: "Latvian" }
  ],

  speakingTutors: [
    { name: "Edgars", vibe: "Calm, friendly" },
    { name: "Rihards", vibe: "Relaxed, casual" },
    { name: "Mikus", vibe: "Steady, patient" },
    { name: "Elza", vibe: "Soft, supportive" },
    { name: "Liene", vibe: "Gentle, melodic" },
    { name: "Anete", vibe: "Warm, expressive" },
    { name: "Roberts", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Latvian with a warm, clear tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kā tev klājas?", expand: "Add how you're feeling." },
    { answer: "Labi.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Forši", meaning: "Cool" },
    { term: "Ok", meaning: "Okay" },
    { term: "Super", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Latvian has clear vowels and steady rhythm.",
    "Stress is usually on the first syllable."
  ],

  culturalNotes: [
    "Speech is calm and polite.",
    "Small talk is friendly but not overly expressive."
  ]
};
