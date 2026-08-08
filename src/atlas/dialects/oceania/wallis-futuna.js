export default {
  id: "wallis-futuna",
  name: "Wallis & Futuna",
  dialects: [
    { id: "wf-wallisian", name: "Wallisian" },
    { id: "wf-futunan", name: "Futunan" },
    { id: "wf-french", name: "French" }
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
      "We will practice Wallisian and Futunan with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Mālō le lelei", expand: "Add how you're feeling." },
    { answer: "Manuia.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Mālō", meaning: "Good" },
    { term: "Ok", meaning: "Okay" },
    { term: "Ia", meaning: "Yes" }
  ],

  pronunciationNotes: [
    "Wallisian and Futunan have Polynesian vowel patterns.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Polynesian cultural influence is strong."
  ]
};
