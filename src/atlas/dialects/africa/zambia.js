export default {
  id: "zambia",
  name: "Zambia",
  dialects: [
    { id: "zm-bemba", name: "Bemba" },
    { id: "zm-nyanja", name: "Nyanja" },
    { id: "zm-tonga", name: "Tonga" },
    { id: "zm-lozi", name: "Lozi" }
  ],

  speakingTutors: [
    { name: "Mwansa", vibe: "Warm, friendly" },
    { name: "Chanda", vibe: "Calm, steady" },
    { name: "Mutale", vibe: "Relaxed, casual" },
    { name: "Luyando", vibe: "Soft, supportive" },
    { name: "Misozi", vibe: "Warm, expressive" },
    { name: "Tiwonge", vibe: "Gentle, melodic" },
    { name: "Kondwani", vibe: "Clear, structured" },
    { name: "Mubanga", vibe: "Calm, patient" },
    { name: "Tasheni", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Bemba and Nyanja with a warm, rhythmic tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Muli shani?", expand: "Add how you're doing." },
    { answer: "Ndili bwino.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sharp", meaning: "Good" },
    { term: "Eya", meaning: "Yes" },
    { term: "Zii", meaning: "Quiet / chill" }
  ],

  pronunciationNotes: [
    "Bemba is tonal with smooth consonants.",
    "Nyanja is similar to Chichewa in Malawi."
  ],

  culturalNotes: [
    "Zambia has over 70 languages.",
    "Speech is warm and melodic."
  ]
};
