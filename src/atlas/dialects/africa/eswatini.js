export default {
  id: "eswatini",
  name: "Eswatini",
  dialects: [
    { id: "sz-swazi", name: "Swazi (siSwati)" },
    { id: "sz-english", name: "Swazi English" }
  ],

  speakingTutors: [
    { name: "Sibusiso", vibe: "Warm, friendly" },
    { name: "Mlungisi", vibe: "Calm, steady" },
    { name: "Thulani", vibe: "Relaxed, casual" },
    { name: "Zanele", vibe: "Soft, supportive" },
    { name: "Nokuthula", vibe: "Warm, expressive" },
    { name: "Nomsa", vibe: "Gentle, melodic" },
    { name: "Bongani", vibe: "Clear, structured" },
    { name: "Ayanda", vibe: "Calm, patient" },
    { name: "Gugu", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice siSwati with a warm, melodic tone. Keep responses friendly, calm, and natural."
  },

  starterPhrases: [
    { answer: "Unjani?", expand: "Add how you're feeling." },
    { answer: "Ngikhona.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yebo", meaning: "Yes" },
    { term: "Hawu", meaning: "Expression of surprise" },
    { term: "Sharp", meaning: "Okay / good" }
  ],

  pronunciationNotes: [
    "siSwati is closely related to Zulu and uses similar sounds.",
    "Speech is smooth, melodic, and rhythmic."
  ],

  culturalNotes: [
    "Eswatini has strong cultural traditions and respectful speech patterns.",
    "siSwati is spoken nationwide and used in daily life."
  ]
};
