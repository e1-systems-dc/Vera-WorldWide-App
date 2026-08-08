export default {
  id: "sri-lanka",
  name: "Sri Lanka",
  dialects: [
    { id: "lk-sinhala", name: "Sinhala" },
    { id: "lk-tamil", name: "Sri Lankan Tamil" }
  ],

  speakingTutors: [
    { name: "Kavindu", vibe: "Warm, friendly" },
    { name: "Nuwan", vibe: "Calm, steady" },
    { name: "Sahan", vibe: "Relaxed, casual" },
    { name: "Dilani", vibe: "Soft, supportive" },
    { name: "Nadeesha", vibe: "Warm, expressive" },
    { name: "Tharushi", vibe: "Gentle, melodic" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Mira", vibe: "Clear, friendly" },
    { name: "Zara", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Sinhala with a warm, gentle tone. Keep it smooth and natural."
  },

  starterPhrases: [
    { answer: "Kohomada?", expand: "Add how you're doing." },
    { answer: "Hondai.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Hari", meaning: "Okay" },
    { term: "Machan", meaning: "Bro / friend" },
    { term: "Ela", meaning: "Cool" }
  ],

  pronunciationNotes: [
    "Sinhala has soft consonants and rounded vowels.",
    "Sri Lankan Tamil differs from Indian Tamil in tone."
  ],

  culturalNotes: [
    "Sri Lankan speech is calm and melodic.",
    "Hospitality is reflected in conversational tone."
  ]
};
