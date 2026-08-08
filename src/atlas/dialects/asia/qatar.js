export default {
  id: "qatar",
  name: "Qatar",
  dialects: [
    { id: "qa-gulf-arabic", name: "Gulf Arabic (Qatari)" }
  ],

  speakingTutors: [
    { name: "Jassim", vibe: "Warm, friendly" },
    { name: "Nawaf", vibe: "Calm, steady" },
    { name: "Hamad", vibe: "Relaxed, casual" },
    { name: "Amal", vibe: "Soft, supportive" },
    { name: "Sara", vibe: "Warm, expressive" },
    { name: "Maha", vibe: "Gentle, melodic" },
    { name: "Fahad", vibe: "Clear, structured" },
    { name: "Aisha", vibe: "Calm, patient" },
    { name: "Rashed", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Qatari Arabic with a warm, Gulf tone. Keep it smooth, friendly, and natural."
  },

  starterPhrases: [
    { answer: "Shlonak?", expand: "Add how you're doing." },
    { answer: "Ana bikhair.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yaani", meaning: "Like / you know" },
    { term: "Zain", meaning: "Good" },
    { term: "Hala", meaning: "Hi / welcome" }
  ],

  pronunciationNotes: [
    "Qatari Arabic is close to Emirati and Kuwaiti dialects.",
    "Speech is soft and vowel-rich."
  ],

  culturalNotes: [
    "Qatar shares linguistic roots with the Gulf region.",
    "Modern Qatari speech blends Arabic and English."
  ]
};
