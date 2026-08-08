export default {
  id: "oman",
  name: "Oman",
  dialects: [
    { id: "om-gulf-arabic", name: "Gulf Arabic (Omani)" },
    { id: "om-dhofari", name: "Dhofari Arabic" }
  ],

  speakingTutors: [
    { name: "Basim", vibe: "Warm, calm" },
    { name: "Ameen", vibe: "Steady, patient" },
    { name: "Salim", vibe: "Relaxed, friendly" },
    { name: "Samira", vibe: "Soft, supportive" },
    { name: "Salma", vibe: "Warm, expressive" },
    { name: "Maha", vibe: "Gentle, melodic" },
    { name: "Nasser", vibe: "Clear, structured" },
    { name: "Alya", vibe: "Calm, patient" },
    { name: "Rashid", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Omani Arabic with a warm, gentle tone. Keep it natural and calm."
  },

  starterPhrases: [
    { answer: "Kif halak?", expand: "Add how you're doing." },
    { answer: "Ana bikhair.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Zain", meaning: "Good" },
    { term: "Hatha", meaning: "This" },
    { term: "Yalla", meaning: "Let's go" }
  ],

  pronunciationNotes: [
    "Omani Arabic is softer than Saudi Najdi.",
    "Dhofari Arabic has unique South Arabian influences."
  ],

  culturalNotes: [
    "Oman has one of the most distinct dialects in the Gulf.",
    "Speech is calm, polite, and melodic."
  ]
};
