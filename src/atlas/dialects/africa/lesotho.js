export default {
  id: "lesotho",
  name: "Lesotho",
  dialects: [
    { id: "ls-sesotho", name: "Sesotho" },
    { id: "ls-english", name: "Lesotho English" }
  ],

  speakingTutors: [
    { name: "Teboho", vibe: "Warm, friendly" },
    { name: "Mpho", vibe: "Calm, steady" },
    { name: "Khotso", vibe: "Relaxed, casual" },
    { name: "Lineo", vibe: "Soft, supportive" },
    { name: "Nthabiseng", vibe: "Warm, expressive" },
    { name: "Masego", vibe: "Gentle, melodic" },
    { name: "Thato", vibe: "Clear, structured" },
    { name: "Palesa", vibe: "Calm, patient" },
    { name: "Refiloe", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Sesotho with a warm, melodic tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "O kae?", expand: "Add how you're doing." },
    { answer: "Ke teng.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sharp", meaning: "Good" },
    { term: "Aowa", meaning: "No" },
    { term: "Eish", meaning: "Expression of surprise" }
  ],

  pronunciationNotes: [
    "Sesotho is smooth with open vowels.",
    "Speech is melodic and rhythmic."
  ],

  culturalNotes: [
    "Lesotho is mountainous with strong cultural identity.",
    "Sesotho is spoken nationwide."
  ]
};
