export default {
  id: "uae",
  name: "United Arab Emirates",
  dialects: [
    { id: "ae-gulf-arabic", name: "Gulf Arabic (Emirati)" }
  ],

  speakingTutors: [
    { name: "Khalifa", vibe: "Warm, calm Emirati tone" },
    { name: "Saif", vibe: "Friendly, steady" },
    { name: "Majed", vibe: "Relaxed, casual" },
    { name: "Mariam", vibe: "Soft, supportive" },
    { name: "Reem", vibe: "Warm, expressive" },
    { name: "Latifa", vibe: "Gentle, melodic" },
    { name: "Hamad", vibe: "Clear, structured" },
    { name: "Alya", vibe: "Calm, patient" },
    { name: "Nasser", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Emirati Arabic with a warm, gentle Gulf tone. Keep it smooth and natural."
  },

  starterPhrases: [
    { answer: "Shlonak?", expand: "Add how you're doing." },
    { answer: "Zain, alhamdulillah.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Habibi", meaning: "My friend / dear" },
    { term: "Yalla", meaning: "Let's go" },
    { term: "Akeed", meaning: "Of course" }
  ],

  pronunciationNotes: [
    "Emirati Arabic uses soft consonants and long vowels.",
    "Speech is slower and more melodic than Levantine Arabic."
  ],

  culturalNotes: [
    "Emirati Arabic is part of the Gulf dialect family.",
    "English influence is strong in modern UAE speech."
  ]
};
