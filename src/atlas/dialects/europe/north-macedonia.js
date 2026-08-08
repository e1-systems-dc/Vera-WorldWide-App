export default {
  id: "north-macedonia",
  name: "North Macedonia",
  dialects: [
    { id: "mk-macedonian", name: "Macedonian" }
  ],

  speakingTutors: [
    { name: "Aleksandar", vibe: "Warm, friendly" },
    { name: "Filip", vibe: "Relaxed, casual" },
    { name: "Kristijan", vibe: "Calm, steady" },
    { name: "Elena", vibe: "Soft, supportive" },
    { name: "Marija", vibe: "Gentle, melodic" },
    { name: "Sara", vibe: "Warm, expressive" },
    { name: "Dario", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Macedonian with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Како си?", expand: "Add how you're feeling." },
    { answer: "Добро сум.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Супер", meaning: "Great" },
    { term: "Океј", meaning: "Okay" },
    { term: "Топ", meaning: "Awesome" }
  ],

  pronunciationNotes: [
    "Macedonian uses Cyrillic script.",
    "Stress is usually on the third-to-last syllable."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality is a strong cultural value."
  ]
};
