export default {
  id: "serbia",
  name: "Serbia",
  dialects: [
    { id: "rs-serbian", name: "Serbian" }
  ],

  speakingTutors: [
    { name: "Nikola", vibe: "Warm, friendly" },
    { name: "Stefan", vibe: "Relaxed, casual" },
    { name: "Milan", vibe: "Calm, steady" },
    { name: "Jelena", vibe: "Soft, supportive" },
    { name: "Milica", vibe: "Gentle, melodic" },
    { name: "Teodora", vibe: "Warm, expressive" },
    { name: "Viktor", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Serbian with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kako si?", expand: "Add how you're feeling." },
    { answer: "Dobro sam.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Brutalno", meaning: "Awesome" },
    { term: "Super", meaning: "Great" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Serbian uses both Cyrillic and Latin scripts.",
    "Stress varies by word."
  ],

  culturalNotes: [
    "Speech is expressive and warm.",
    "Hospitality is a strong cultural value."
  ]
};
