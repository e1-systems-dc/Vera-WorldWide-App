export default {
  id: "israel",
  name: "Israel",
  dialects: [
    { id: "il-hebrew", name: "Modern Hebrew" },
    { id: "il-arabic", name: "Palestinian Arabic (Israel)" }
  ],

  speakingTutors: [
    { name: "Eitan", vibe: "Warm, modern Hebrew tone" },
    { name: "Noam", vibe: "Calm, steady" },
    { name: "Amit", vibe: "Relaxed, friendly" },
    { name: "Yael", vibe: "Soft, supportive" },
    { name: "Lior", vibe: "Warm, expressive" },
    { name: "Shira", vibe: "Gentle, melodic" },
    { name: "Omer", vibe: "Clear, structured" },
    { name: "Dana", vibe: "Calm, patient" },
    { name: "Tal", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Modern Hebrew with a warm, clear tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Ma nishma?", expand: "Add how you're doing." },
    { answer: "Tov meod.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sababa", meaning: "Cool / great" },
    { term: "Yalla", meaning: "Let's go" },
    { term: "Achla", meaning: "Awesome" }
  ],

  pronunciationNotes: [
    "Modern Hebrew uses emphatic consonants.",
    "Stress usually falls on the last syllable."
  ],

  culturalNotes: [
    "Hebrew blends ancient roots with modern slang.",
    "Arabic is widely spoken in Arab communities within Israel."
  ]
};
