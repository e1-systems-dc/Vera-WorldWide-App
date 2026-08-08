export default {
  id: "australia",
  name: "Australia",
  dialects: [
    { id: "au-english", name: "Australian English" }
  ],

  speakingTutors: [
    { name: "Liam", vibe: "Warm, friendly" },
    { name: "Jack", vibe: "Relaxed, casual" },
    { name: "Ethan", vibe: "Calm, steady" },
    { name: "Chloe", vibe: "Soft, supportive" },
    { name: "Sienna", vibe: "Gentle, melodic" },
    { name: "Zara", vibe: "Warm, expressive" },
    { name: "Mason", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Australian English with a warm, relaxed tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "How ya goin’?", expand: "Add how you're feeling." },
    { answer: "All good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Mate", meaning: "Friend" },
    { term: "Heaps", meaning: "A lot" },
    { term: "No worries", meaning: "It’s okay" }
  ],

  pronunciationNotes: [
    "Australian English has smooth vowels and rising intonation.",
    "Speech is relaxed and friendly."
  ],

  culturalNotes: [
    "Speech is casual and warm.",
    "Humor and friendliness shape conversation."
  ]
};
