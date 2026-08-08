export default {
  id: "botswana",
  name: "Botswana",
  dialects: [
    { id: "bw-tswana", name: "Setswana" },
    { id: "bw-kalanga", name: "Kalanga" },
    { id: "bw-english", name: "Botswana English" }
  ],

  speakingTutors: [
    { name: "Kabelo", vibe: "Warm, friendly" },
    { name: "Otsile", vibe: "Calm, steady" },
    { name: "Thabang", vibe: "Relaxed, casual" },
    { name: "Lorato", vibe: "Soft, supportive" },
    { name: "Boitumelo", vibe: "Warm, expressive" },
    { name: "Keitumetse", vibe: "Gentle, melodic" },
    { name: "Neo", vibe: "Clear, structured" },
    { name: "Gaone", vibe: "Calm, patient" },
    { name: "Tshiamo", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Setswana with a warm, melodic tone. Keep it friendly and natural."
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
    "Setswana is smooth with open vowels.",
    "Speech is melodic and rhythmic."
  ],

  culturalNotes: [
    "Botswana is known for calm, polite speech.",
    "Setswana is widely spoken across the country."
  ]
};
