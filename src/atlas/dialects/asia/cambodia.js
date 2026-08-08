export default {
  id: "cambodia",
  name: "Cambodia",
  dialects: [
    { id: "kh-khmer", name: "Khmer" }
  ],

  speakingTutors: [
    { name: "Sokha", vibe: "Calm, friendly" },
    { name: "Vannak", vibe: "Relaxed, casual" },
    { name: "Rith", vibe: "Steady, patient" },
    { name: "Srey", vibe: "Soft, supportive" },
    { name: "Dara", vibe: "Gentle, melodic" },
    { name: "Chenda", vibe: "Warm, expressive" },
    { name: "Pisey", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Khmer with a warm, gentle tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "សុខសប្បាយទេ?", expand: "Add how you’re feeling." },
    { answer: "ខ្ញុំសុខសប្បាយ។", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "ល្អណាស់", meaning: "Very good" },
    { term: "អីចឹង", meaning: "Like that / that way" },
    { term: "បាទ/ចា", meaning: "Yes (polite male/female)" }
  ],

  pronunciationNotes: [
    "Khmer has many consonant clusters and long vowels.",
    "Stress is relatively even across syllables."
  ],

  culturalNotes: [
    "Speech is polite and calm.",
    "Honorifics and titles show respect."
  ]
};
