export default {
  id: "tuvalu",
  name: "Tuvalu",
  dialects: [
    { id: "tv-tuvaluan", name: "Tuvaluan" },
    { id: "tv-english", name: "Tuvalu English" }
  ],

  speakingTutors: [
    { name: "Tama", vibe: "Warm, friendly" },
    { name: "Mika", vibe: "Relaxed, casual" },
    { name: "Lio", vibe: "Calm, steady" },
    { name: "Alofa", vibe: "Soft, supportive" },
    { name: "Mele", vibe: "Gentle, melodic" },
    { name: "Lani", vibe: "Warm, expressive" },
    { name: "Sina", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Tuvaluan with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Talofa", expand: "Add how you're feeling." },
    { answer: "Manuia.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Manuia", meaning: "Good" },
    { term: "Io", meaning: "Yes" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Tuvaluan has open vowels and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Community values shape conversation."
  ]
};
