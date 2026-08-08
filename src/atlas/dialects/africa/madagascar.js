export default {
  id: "madagascar",
  name: "Madagascar",
  dialects: [
    { id: "mg-malagasy", name: "Malagasy" },
    { id: "mg-merina", name: "Merina Malagasy" },
    { id: "mg-french", name: "Malagasy French" }
  ],

  speakingTutors: [
    { name: "Hery", vibe: "Warm, friendly" },
    { name: "Tojo", vibe: "Calm, steady" },
    { name: "Faly", vibe: "Relaxed, casual" },
    { name: "Miora", vibe: "Soft, supportive" },
    { name: "Tahina", vibe: "Warm, expressive" },
    { name: "Soa", vibe: "Gentle, melodic" },
    { name: "Nomena", vibe: "Clear, structured" },
    { name: "Lanto", vibe: "Calm, patient" },
    { name: "Tiana", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Malagasy with a warm, gentle tone. Keep it melodic and natural."
  },

  starterPhrases: [
    { answer: "Manao ahoana?", expand: "Add how you're doing." },
    { answer: "Tsara be.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Tsara", meaning: "Good" },
    { term: "Mora mora", meaning: "Slowly / gently" },
    { term: "Vazaha", meaning: "Foreigner" }
  ],

  pronunciationNotes: [
    "Malagasy is non-tonal with soft consonants.",
    "Speech is smooth and rhythmic."
  ],

  culturalNotes: [
    "Malagasy blends African and Austronesian roots.",
    "Speech is gentle and melodic."
  ]
};
