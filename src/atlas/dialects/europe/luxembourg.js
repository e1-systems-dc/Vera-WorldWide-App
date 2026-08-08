export default {
  id: "luxembourg",
  name: "Luxembourg",
  dialects: [
    { id: "lu-luxembourgish", name: "Luxembourgish" },
    { id: "lu-french", name: "French" },
    { id: "lu-german", name: "German" }
  ],

  speakingTutors: [
    { name: "Tom", vibe: "Warm, friendly" },
    { name: "Ben", vibe: "Relaxed, casual" },
    { name: "Marc", vibe: "Calm, steady" },
    { name: "Lara", vibe: "Soft, supportive" },
    { name: "Mila", vibe: "Gentle, melodic" },
    { name: "Elin", vibe: "Warm, expressive" },
    { name: "Joel", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Luxembourgish with a warm, multilingual tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Wéi geet et?", expand: "Add how you're feeling." },
    { answer: "Et geet gutt.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Moien", meaning: "Hi" },
    { term: "Jo", meaning: "Yes" },
    { term: "Okay", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Luxembourgish blends Germanic and French influences.",
    "Vowels are clear and rounded."
  ],

  culturalNotes: [
    "Speech is friendly and multilingual.",
    "Switching languages mid-sentence is common."
  ]
};
