export default {
  id: "sweden",
  name: "Sweden",
  dialects: [
    { id: "se-swedish", name: "Swedish" }
  ],

  speakingTutors: [
    { name: "Elias", vibe: "Calm, friendly" },
    { name: "Viktor", vibe: "Relaxed, casual" },
    { name: "Anton", vibe: "Steady, patient" },
    { name: "Elin", vibe: "Soft, supportive" },
    { name: "Maja", vibe: "Warm, expressive" },
    { name: "Tilde", vibe: "Gentle, melodic" },
    { name: "Leo", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Swedish with a warm, melodic tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Hur mår du?", expand: "Add how you're feeling." },
    { answer: "Jag mår bra.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Grymt", meaning: "Awesome" },
    { term: "Nice", meaning: "Cool / good" },
    { term: "Okej", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Swedish has a musical pitch accent.",
    "Vowels are long and clear."
  ],

  culturalNotes: [
    "Speech is calm and polite.",
    "Small talk is friendly but not overly personal."
  ]
};
