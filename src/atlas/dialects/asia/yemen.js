export default {
  id: "yemen",
  name: "Yemen",
  dialects: [
    { id: "ye-sanaani", name: "Sanaani Arabic" },
    { id: "ye-taiz", name: "Taizzi-Adeni Arabic" },
    { id: "ye-hadhrami", name: "Hadhrami Arabic" }
  ],

  speakingTutors: [
    { name: "Ammar", vibe: "Warm, friendly" },
    { name: "Basheer", vibe: "Calm, steady" },
    { name: "Yahya", vibe: "Relaxed, casual" },
    { name: "Samira", vibe: "Soft, supportive" },
    { name: "Rania", vibe: "Warm, expressive" },
    { name: "Huda", vibe: "Gentle, melodic" },
    { name: "Nabil", vibe: "Clear, structured" },
    { name: "Abeer", vibe: "Calm, patient" },
    { name: "Saeed", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Yemeni Arabic with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kifak?", expand: "Add how you're doing." },
    { answer: "Ana tamam.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Shabab", meaning: "Guys / youth" },
    { term: "Zain", meaning: "Good" },
    { term: "Hada", meaning: "This" }
  ],

  pronunciationNotes: [
    "Yemeni Arabic preserves older Arabic sounds.",
    "Hadhrami Arabic uses a soft 'j' sound."
  ],

  culturalNotes: [
    "Yemen has some of the oldest Arabic dialects.",
    "Speech is warm, expressive, and rhythmic."
  ]
};
