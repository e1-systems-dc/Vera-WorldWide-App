export default {
  id: "niue",
  name: "Niue",
  dialects: [
    { id: "nu-niuean", name: "Niuean" },
    { id: "nu-english", name: "Niue English" }
  ],

  speakingTutors: [
    { name: "Mana", vibe: "Warm, friendly" },
    { name: "Aroha", vibe: "Relaxed, casual" },
    { name: "Tane", vibe: "Calm, steady" },
    { name: "Hina", vibe: "Soft, supportive" },
    { name: "Moana", vibe: "Gentle, melodic" },
    { name: "Riri", vibe: "Warm, expressive" },
    { name: "Koa", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Niuean with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Fakaalofa atu", expand: "Add how you're feeling." },
    { answer: "Fiafia au.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Fiafia", meaning: "Happy / good" },
    { term: "Io", meaning: "Yes" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Niuean has Polynesian vowel patterns.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Community values shape conversation."
  ]
};
