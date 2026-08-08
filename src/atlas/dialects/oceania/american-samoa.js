export default {
  id: "american-samoa",
  name: "American Samoa",
  dialects: [
    { id: "as-samoan", name: "Samoan (American Samoa)" },
    { id: "as-english", name: "American Samoan English" }
  ],

  speakingTutors: [
    { name: "Tama", vibe: "Warm, friendly" },
    { name: "Lio", vibe: "Relaxed, casual" },
    { name: "Mika", vibe: "Calm, steady" },
    { name: "Alofa", vibe: "Soft, supportive" },
    { name: "Mele", vibe: "Gentle, melodic" },
    { name: "Lani", vibe: "Warm, expressive" },
    { name: "Sina", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Samoan with a warm, respectful tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Talofa", expand: "Add how you're feeling." },
    { answer: "Manuia.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Malo", meaning: "Good" },
    { term: "Io", meaning: "Yes" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Samoan has open vowels and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Family and community shape conversation."
  ]
};
