export default {
  id: "aruba",
  name: "Aruba",
  dialects: [
    { id: "aw-papiamento", name: "Papiamento" },
    { id: "aw-dutch", name: "Dutch" },
    { id: "aw-english", name: "Aruban English" }
  ],

  speakingTutors: [
    { name: "Rico", vibe: "Warm, friendly" },
    { name: "Jayden", vibe: "Relaxed, casual" },
    { name: "Malik", vibe: "Calm, steady" },
    { name: "Aisha", vibe: "Soft, supportive" },
    { name: "Liana", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Papiamento with a warm, melodic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Kon ta bai?", expand: "Add how you're feeling." },
    { answer: "Mi ta bon.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Dushi", meaning: "Sweet / nice / good" },
    { term: "Bon", meaning: "Good" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Papiamento has rhythmic intonation and smooth vowels.",
    "Dutch and English influence pronunciation."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Multilingual switching is common."
  ]
};
