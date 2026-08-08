export default {
  id: "netherlands",
  name: "Netherlands",
  dialects: [
    { id: "nl-dutch", name: "Dutch" }
  ],

  speakingTutors: [
    { name: "Daan", vibe: "Warm, friendly" },
    { name: "Bram", vibe: "Relaxed, casual" },
    { name: "Sven", vibe: "Calm, steady" },
    { name: "Fleur", vibe: "Soft, supportive" },
    { name: "Lina", vibe: "Gentle, melodic" },
    { name: "Noor", vibe: "Warm, expressive" },
    { name: "Timo", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Dutch with a clear, friendly tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "Hoe gaat het?", expand: "Add how you're feeling." },
    { answer: "Goed.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Lekker", meaning: "Nice / tasty / good" },
    { term: "Top", meaning: "Great" },
    { term: "Okee", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Dutch has strong consonants and clear vowels.",
    "Rhythm is steady and direct."
  ],

  culturalNotes: [
    "Speech is direct but friendly.",
    "Humor is dry and straightforward."
  ]
};
