export default {
  id: "indonesia",
  name: "Indonesia",
  dialects: [
    { id: "id-bahasa", name: "Bahasa Indonesia" },
    { id: "id-javanese", name: "Javanese" }
  ],

  speakingTutors: [
    { name: "Rizky", vibe: "Warm, friendly" },
    { name: "Adi", vibe: "Relaxed, casual" },
    { name: "Bagas", vibe: "Calm, steady" },
    { name: "Sari", vibe: "Soft, supportive" },
    { name: "Nadia", vibe: "Gentle, melodic" },
    { name: "Dewi", vibe: "Warm, expressive" },
    { name: "Arman", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Bahasa Indonesia with a relaxed, clear tone. Keep it simple and natural."
  },

  starterPhrases: [
    { answer: "Apa kabar?", expand: "Add how you’re feeling." },
    { answer: "Baik.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Mantap", meaning: "Great / solid" },
    { term: "Santai", meaning: "Relax / chill" },
    { term: "Oke", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Bahasa Indonesia has straightforward pronunciation.",
    "Stress is usually on the second-to-last syllable."
  ],

  culturalNotes: [
    "Speech is often warm and relaxed.",
    "Mixing local languages with Bahasa is common."
  ]
};
