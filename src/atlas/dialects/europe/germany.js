export default {
  id: "germany",
  name: "Germany",
  dialects: [
    { id: "de-high", name: "High German (Standard)" },
    { id: "de-bavarian", name: "Bavarian" }
  ],

  speakingTutors: [
    { name: "Jonas", vibe: "Warm, friendly" },
    { name: "Felix", vibe: "Relaxed, casual" },
    { name: "Leon", vibe: "Calm, steady" },
    { name: "Mia", vibe: "Soft, supportive" },
    { name: "Lena", vibe: "Gentle, melodic" },
    { name: "Hannah", vibe: "Warm, expressive" },
    { name: "Tim", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice German with a clear, steady tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Wie geht’s?", expand: "Add how you're feeling." },
    { answer: "Gut.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Cool", meaning: "Nice" },
    { term: "Alles klar", meaning: "All good" },
    { term: "Passt", meaning: "Works / okay" }
  ],

  pronunciationNotes: [
    "German has strong consonants and clear vowels.",
    "Standard German is widely understood."
  ],

  culturalNotes: [
    "Speech is direct but polite.",
    "Clarity is valued in conversation."
  ]
};
