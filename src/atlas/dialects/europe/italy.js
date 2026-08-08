export default {
  id: "italy",
  name: "Italy",
  dialects: [
    { id: "it-italian", name: "Italian" }
  ],

  speakingTutors: [
    { name: "Lorenzo", vibe: "Warm, expressive" },
    { name: "Matteo", vibe: "Relaxed, casual" },
    { name: "Davide", vibe: "Calm, steady" },
    { name: "Giulia", vibe: "Soft, supportive" },
    { name: "Sofia", vibe: "Gentle, melodic" },
    { name: "Chiara", vibe: "Warm, friendly" },
    { name: "Nico", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Italian with a warm, expressive tone. Keep it natural and melodic."
  },

  starterPhrases: [
    { answer: "Come stai?", expand: "Add how you're feeling." },
    { answer: "Sto bene.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bello", meaning: "Cool / nice" },
    { term: "Dai", meaning: "Come on / let's go" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Italian has open vowels and clear consonants.",
    "Rhythm is melodic and expressive."
  ],

  culturalNotes: [
    "Speech is warm and animated.",
    "Gestures often accompany conversation."
  ]
};
