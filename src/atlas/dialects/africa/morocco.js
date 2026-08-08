export default {
  id: "morocco",
  name: "Morocco",
  dialects: [
    { id: "ma-darija", name: "Darija (Moroccan Arabic)" },
    { id: "ma-rif", name: "Rifian Amazigh (Tarifit)" },
    { id: "ma-atlas", name: "Central Atlas Amazigh (Tamazight)" },
    { id: "ma-sous", name: "Shilha Amazigh (Tachelhit)" },
    { id: "ma-hassaniya", name: "Hassaniya Arabic" }
  ],

  speakingTutors: [
    { name: "Badr", vibe: "Casablanca street‑smart, fast, friendly" },
    { name: "Jamal", vibe: "Warm, humorous, classic Moroccan energy" },
    { name: "Youssef", vibe: "Clear, Rabat‑style pronunciation" },
    { name: "Hamza", vibe: "Youthful, upbeat" },
    { name: "Ayoub", vibe: "Relaxed, friendly" },
    { name: "Othmane", vibe: "Calm, steady" },
    { name: "Saad", vibe: "Encouraging, supportive" },
    { name: "Imad", vibe: "Soft‑spoken, helpful" },
    { name: "Nordin", vibe: "Modern, casual" },

    { name: "Malika", vibe: "Warm, motherly, Rabat clarity" },
    { name: "Fatima", vibe: "Classic Moroccan hospitality" },
    { name: "Zineb", vibe: "Friendly, modern" },
    { name: "Ikram", vibe: "Youthful, upbeat" },
    { name: "Siham", vibe: "Calm, patient" },
    { name: "Houda", vibe: "Encouraging, kind" },
    { name: "Najwa", vibe: "Expressive, fun" },
    { name: "Karima", vibe: "Clear, structured" },
    { name: "Ilham", vibe: "Soft, supportive" }
  ],

  coachPrompts: {
    general:
      "We will practice Darija with a natural Moroccan tone. Keep it warm, fast, and real."
  },

  starterPhrases: [
    { answer: "Labas? Kulshi bikhir.", expand: "Add a detail about your day." },
    { answer: "Ana jay men Rabat.", expand: "Add why you're here or where you're going." }
  ],

  slang: [
    { term: "Zwin", meaning: "Nice / beautiful" },
    { term: "Safi", meaning: "Enough / done" },
    { term: "Daba", meaning: "Now" }
  ],

  pronunciationNotes: [
    "Darija drops many vowels; speech is fast and clipped.",
    "The 'q' becomes 'g' in Casablanca but stays 'q' in Rabat."
  ],

  culturalNotes: [
    "Darija mixes Arabic, French, Amazigh, and Spanish influences.",
    "Rabat speech is clearer; Casablanca is faster and slang‑heavy."
  ]
};
