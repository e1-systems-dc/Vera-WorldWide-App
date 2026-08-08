export default {
  id: "tajikistan",
  name: "Tajikistan",
  dialects: [
    { id: "tj-tajik", name: "Tajik Persian" },
    { id: "tj-russian", name: "Tajikistani Russian" }
  ],

  speakingTutors: [
    { name: "Farid", vibe: "Warm, friendly" },
    { name: "Behruz", vibe: "Calm, steady" },
    { name: "Suhrob", vibe: "Relaxed, casual" },
    { name: "Zebo", vibe: "Soft, supportive" },
    { name: "Nigina", vibe: "Warm, expressive" },
    { name: "Mavluda", vibe: "Gentle, melodic" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Leyla", vibe: "Clear, friendly" },
    { name: "Mira", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Tajik with a warm, poetic tone. Keep it smooth and expressive."
  },

  starterPhrases: [
    { answer: "Holi shumo chi hél?", expand: "Add how you're doing." },
    { answer: "Khubam.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Ajoyib", meaning: "Great" },
    { term: "Zor", meaning: "Cool" },
    { term: "Bro", meaning: "Friend" }
  ],

  pronunciationNotes: [
    "Tajik is a Persian language written in Cyrillic.",
    "Speech is soft and melodic."
  ],

  culturalNotes: [
    "Tajikistan blends Persian and Central Asian influences.",
    "Speech is warm, expressive, and rhythmic."
  ]
};
