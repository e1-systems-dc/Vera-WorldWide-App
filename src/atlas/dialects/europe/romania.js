export default {
  id: "romania",
  name: "Romania",
  dialects: [
    { id: "ro-romanian", name: "Romanian" }
  ],

  speakingTutors: [
    { name: "Andrei", vibe: "Warm, friendly" },
    { name: "Vlad", vibe: "Relaxed, casual" },
    { name: "Radu", vibe: "Calm, steady" },
    { name: "Elena", vibe: "Soft, supportive" },
    { name: "Ioana", vibe: "Gentle, melodic" },
    { name: "Mara", vibe: "Warm, expressive" },
    { name: "Darius", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Romanian with a warm, melodic tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Ce faci?", expand: "Add how you're feeling." },
    { answer: "Sunt bine.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Tare", meaning: "Cool" },
    { term: "Mișto", meaning: "Nice" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Romanian has clear vowels and soft consonants.",
    "It shares features with Italian and Slavic languages."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Small talk often includes family or daily life."
  ]
};
