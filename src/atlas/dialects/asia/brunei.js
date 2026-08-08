export default {
  id: "brunei",
  name: "Brunei",
  dialects: [
    { id: "bn-malay", name: "Brunei Malay" }
  ],

  speakingTutors: [
    { name: "Hafiz", vibe: "Calm, friendly" },
    { name: "Faiz", vibe: "Relaxed, casual" },
    { name: "Iman", vibe: "Steady, patient" },
    { name: "Alya", vibe: "Soft, supportive" },
    { name: "Nisa", vibe: "Gentle, melodic" },
    { name: "Zara", vibe: "Warm, expressive" },
    { name: "Arman", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Brunei Malay with a warm, easygoing tone. Keep it natural and clear."
  },

  starterPhrases: [
    { answer: "Apa khabar?", expand: "Add how you’re feeling." },
    { answer: "Baik.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Syok", meaning: "Fun / enjoyable" },
    { term: "Ok bah", meaning: "It’s okay / fine" },
    { term: "Relax saja", meaning: "Just relax" }
  ],

  pronunciationNotes: [
    "Brunei Malay is close to other Malay varieties.",
    "Rhythm is steady and syllable-based."
  ],

  culturalNotes: [
    "Speech is polite and calm.",
    "Mixing English in casual talk is common."
  ]
};
