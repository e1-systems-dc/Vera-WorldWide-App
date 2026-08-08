export default {
  id: "new-zealand",
  name: "New Zealand",
  dialects: [
    { id: "nz-english", name: "New Zealand English" },
    { id: "nz-maori", name: "Māori" }
  ],

  speakingTutors: [
    { name: "Luca", vibe: "Warm, friendly" },
    { name: "Arlo", vibe: "Relaxed, casual" },
    { name: "Finn", vibe: "Calm, steady" },
    { name: "Aroha", vibe: "Soft, supportive" },
    { name: "Mia", vibe: "Gentle, melodic" },
    { name: "Kaia", vibe: "Warm, expressive" },
    { name: "Niko", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice New Zealand English and Māori with a warm, respectful tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kia ora", expand: "Add how you're feeling." },
    { answer: "I’m good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Sweet as", meaning: "Great" },
    { term: "Kia ora", meaning: "Hello" },
    { term: "Choice", meaning: "Cool" }
  ],

  pronunciationNotes: [
    "New Zealand English has unique vowel shifts.",
    "Māori has open vowels and rhythmic flow."
  ],

  culturalNotes: [
    "Speech is warm and respectful.",
    "Māori culture influences daily language."
  ]
};
