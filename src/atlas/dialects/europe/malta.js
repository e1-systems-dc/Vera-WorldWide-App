export default {
  id: "malta",
  name: "Malta",
  dialects: [
    { id: "mt-maltese", name: "Maltese" },
    { id: "mt-english", name: "Maltese English" }
  ],

  speakingTutors: [
    { name: "Liam", vibe: "Warm, friendly" },
    { name: "Dylan", vibe: "Relaxed, casual" },
    { name: "Kai", vibe: "Calm, steady" },
    { name: "Maya", vibe: "Soft, supportive" },
    { name: "Elena", vibe: "Gentle, melodic" },
    { name: "Nina", vibe: "Warm, expressive" },
    { name: "Ari", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Maltese with a warm, multilingual tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kif inti?", expand: "Add how you're feeling." },
    { answer: "Tajjeb.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Mela", meaning: "Well then / okay" },
    { term: "Okay", meaning: "Okay" },
    { term: "Bravu", meaning: "Good job" }
  ],

  pronunciationNotes: [
    "Maltese blends Semitic and Romance sounds.",
    "English influence is strong in daily speech."
  ],

  culturalNotes: [
    "Speech is warm and friendly.",
    "Code-switching is common."
  ]
};
