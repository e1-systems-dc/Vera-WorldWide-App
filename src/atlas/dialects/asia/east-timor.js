export default {
  id: "east-timor",
  name: "East Timor",
  dialects: [
    { id: "tl-tetum", name: "Tetum" },
    { id: "tl-portuguese", name: "Portuguese (Timor)" }
  ],

  speakingTutors: [
    { name: "João", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Mateus", vibe: "Steady, patient" },
    { name: "Ana", vibe: "Soft, supportive" },
    { name: "Rosa", vibe: "Gentle, melodic" },
    { name: "Nina", vibe: "Warm, expressive" },
    { name: "Arman", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Tetum and local Portuguese with a warm, relaxed tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Diak ka lae?", expand: "Add how you’re feeling." },
    { answer: "Diak.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Diak liu", meaning: "Very good" },
    { term: "Oke", meaning: "Okay" },
    { term: "La problema", meaning: "No problem" }
  ],

  pronunciationNotes: [
    "Tetum mixes local and Portuguese influences.",
    "Rhythm is relaxed and syllable-based."
  ],

  culturalNotes: [
    "Speech is warm and community-oriented.",
    "Portuguese adds formal flavor in some contexts."
  ]
};
