export default {
  id: "pakistan",
  name: "Pakistan",
  dialects: [
    { id: "pk-urdu", name: "Urdu" },
    { id: "pk-punjabi", name: "Punjabi (Pakistan)" },
    { id: "pk-sindhi", name: "Sindhi" },
    { id: "pk-pashto", name: "Pashto" },
    { id: "pk-balochi", name: "Balochi" }
  ],

  speakingTutors: [
    { name: "Hamza", vibe: "Warm, friendly" },
    { name: "Bilal", vibe: "Calm, steady" },
    { name: "Usman", vibe: "Relaxed, casual" },
    { name: "Ayesha", vibe: "Soft, supportive" },
    { name: "Zainab", vibe: "Warm, expressive" },
    { name: "Hira", vibe: "Gentle, melodic" },
    { name: "Daniyal", vibe: "Clear, structured" },
    { name: "Mira", vibe: "Modern, upbeat" },
    { name: "Arman", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Pakistani Urdu with a warm, poetic tone. Keep it smooth, expressive, and natural."
  },

  starterPhrases: [
    { answer: "Kya haal hai?", expand: "Add how you're doing." },
    { answer: "Main theek hoon.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Scene on", meaning: "Let's do it" },
    { term: "Bhai", meaning: "Bro / friend" },
    { term: "Fit", meaning: "Cool / good" }
  ],

  pronunciationNotes: [
    "Urdu has soft consonants and poetic rhythm.",
    "Punjabi is more energetic and punchy."
  ],

  culturalNotes: [
    "Urdu is known for politeness and elegance.",
    "Speech varies widely between regions."
  ]
};
