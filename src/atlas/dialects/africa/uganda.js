export default {
  id: "uganda",
  name: "Uganda",
  dialects: [
    { id: "ug-luganda", name: "Luganda" },
    { id: "ug-runyankole", name: "Runyankole" },
    { id: "ug-acholi", name: "Acholi" },
    { id: "ug-english", name: "Ugandan English" }
  ],

  speakingTutors: [
    { name: "Isaac", vibe: "Warm, friendly" },
    { name: "Denis", vibe: "Calm, steady" },
    { name: "Rogers", vibe: "Relaxed, casual" },
    { name: "Sarah", vibe: "Soft, supportive" },
    { name: "Brenda", vibe: "Warm, expressive" },
    { name: "Nabirye", vibe: "Gentle, melodic" },
    { name: "Kato", vibe: "Youthful, upbeat" },
    { name: "Mugisha", vibe: "Clear, structured" },
    { name: "Nansubuga", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Luganda with a warm, melodic tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Oli otya?", expand: "Add how you're doing." },
    { answer: "Gyendi.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sebo", meaning: "Sir" },
    { term: "Nnyabo", meaning: "Madam" },
    { term: "Mukulu", meaning: "Respected elder" }
  ],

  pronunciationNotes: [
    "Luganda is tonal with smooth consonants.",
    "Ugandan English is soft and melodic."
  ],

  culturalNotes: [
    "Luganda is widely spoken in Kampala.",
    "Speech is polite and warm."
  ]
};
