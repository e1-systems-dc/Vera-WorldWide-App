export default {
  id: "seychelles",
  name: "Seychelles",
  dialects: [
    { id: "sc-creole", name: "Seychellois Creole" },
    { id: "sc-french", name: "Seychellois French" },
    { id: "sc-english", name: "Seychellois English" }
  ],

  speakingTutors: [
    { name: "Jean-Luc", vibe: "Warm, island calm" },
    { name: "Andre", vibe: "Friendly, steady" },
    { name: "Michel", vibe: "Relaxed, casual" },
    { name: "Marie-Anne", vibe: "Soft, supportive" },
    { name: "Elise", vibe: "Warm, expressive" },
    { name: "Nadine", vibe: "Gentle, melodic" },
    { name: "Claude", vibe: "Clear, structured" },
    { name: "Solange", vibe: "Calm, patient" },
    { name: "Lucette", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Seychellois Creole with a warm, island tone. Keep it gentle and natural."
  },

  starterPhrases: [
    { answer: "Ki manyer?", expand: "Add how you're doing." },
    { answer: "Mon byen.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Zoli", meaning: "Pretty / nice" },
    { term: "Ayo", meaning: "Oh no / wow" },
    { term: "Mersi bokou", meaning: "Thank you very much" }
  ],

  pronunciationNotes: [
    "Seychellois Creole is French-based with simplified grammar.",
    "Speech is soft, melodic, and rhythmic."
  ],

  culturalNotes: [
    "Seychelles blends African, French, and island influences.",
    "Creole is the national language."
  ]
};
