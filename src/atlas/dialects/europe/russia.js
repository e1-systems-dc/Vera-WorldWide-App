export default {
  id: "russia",
  name: "Russia",
  dialects: [
    { id: "ru-russian", name: "Russian" }
  ],

  speakingTutors: [
    { name: "Arseny", vibe: "Warm, friendly" },
    { name: "Nikita", vibe: "Relaxed, casual" },
    { name: "Timofey", vibe: "Calm, steady" },
    { name: "Alina", vibe: "Soft, supportive" },
    { name: "Polina", vibe: "Gentle, melodic" },
    { name: "Vera", vibe: "Warm, expressive" },
    { name: "Lev", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Russian with a warm, neutral tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Как дела?", expand: "Add how you're feeling." },
    { answer: "Хорошо.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Классно", meaning: "Cool" },
    { term: "Нормально", meaning: "Okay" },
    { term: "Супер", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Russian has soft and hard consonant pairs.",
    "Stress is unpredictable and must be memorized."
  ],

  culturalNotes: [
    "Speech is warm and expressive in casual settings.",
    "Conversations often include humor and storytelling."
  ]
};
