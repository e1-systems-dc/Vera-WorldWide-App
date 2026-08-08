export default {
  id: "bhutan",
  name: "Bhutan",
  dialects: [
    { id: "bt-dzongkha", name: "Dzongkha" }
  ],

  speakingTutors: [
    { name: "Tenzin", vibe: "Warm, friendly" },
    { name: "Karma", vibe: "Calm, steady" },
    { name: "Sonam", vibe: "Relaxed, casual" },
    { name: "Pema", vibe: "Soft, supportive" },
    { name: "Choden", vibe: "Warm, expressive" },
    { name: "Dechen", vibe: "Gentle, melodic" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Zara", vibe: "Clear, friendly" },
    { name: "Mira", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Dzongkha with a warm, calm tone. Keep it natural and gentle."
  },

  starterPhrases: [
    { answer: "Gaday bay zhui?", expand: "Add how you're doing." },
    { answer: "Nga lek shom.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Lekso", meaning: "Okay" },
    { term: "Chabsa", meaning: "Cool" },
    { term: "Ana", meaning: "Friend" }
  ],

  pronunciationNotes: [
    "Dzongkha has Tibetan roots with soft consonants.",
    "Tone is calm and steady."
  ],

  culturalNotes: [
    "Bhutanese speech is polite and gentle.",
    "Honorifics are important in conversation."
  ]
};
