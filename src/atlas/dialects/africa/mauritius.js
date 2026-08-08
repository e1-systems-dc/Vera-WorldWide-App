export default {
  id: "mauritius",
  name: "Mauritius",
  dialects: [
    { id: "mu-creole", name: "Mauritian Creole" },
    { id: "mu-french", name: "Mauritian French" },
    { id: "mu-english", name: "Mauritian English" }
  ],

  speakingTutors: [
    { name: "Ashwin", vibe: "Warm, friendly" },
    { name: "Vikash", vibe: "Calm, steady" },
    { name: "Ritesh", vibe: "Relaxed, casual" },
    { name: "Anusha", vibe: "Soft, supportive" },
    { name: "Priya", vibe: "Warm, expressive" },
    { name: "Nisha", vibe: "Gentle, melodic" },
    { name: "Kiran", vibe: "Clear, structured" },
    { name: "Devika", vibe: "Calm, patient" },
    { name: "Sanjay", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Mauritian Creole with a warm, island tone. Keep it relaxed and natural."
  },

  starterPhrases: [
    { answer: "Ki manyer?", expand: "Add how you're doing." },
    { answer: "Mo bien.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Ayo", meaning: "Oh no / wow" },
    { term: "Mo la", meaning: "I'm here" },
    { term: "Zoli", meaning: "Pretty / nice" }
  ],

  pronunciationNotes: [
    "Mauritian Creole is French-based with simplified grammar.",
    "Speech is soft and rhythmic."
  ],

  culturalNotes: [
    "Mauritius blends African, Indian, French, and Chinese influences.",
    "Creole is widely spoken across the island."
  ]
};
