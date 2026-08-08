export default {
  id: "congo",
  name: "Republic of Congo",
  dialects: [
    { id: "cg-lingala", name: "Lingala (Congo-Brazzaville)" },
    { id: "cg-kituba", name: "Kituba" },
    { id: "cg-kongo", name: "Kongo" },
    { id: "cg-french", name: "Congolese French" }
  ],

  speakingTutors: [
    { name: "Rostand", vibe: "Warm, friendly" },
    { name: "Darel", vibe: "Calm, steady" },
    { name: "Marcelin", vibe: "Relaxed, casual" },
    { name: "Solange", vibe: "Soft, supportive" },
    { name: "Clarisse", vibe: "Warm, expressive" },
    { name: "Mireille", vibe: "Gentle, melodic" },
    { name: "Davy", vibe: "Youthful, upbeat" },
    { name: "Germain", vibe: "Clear, structured" },
    { name: "Natacha", vibe: "Friendly, modern" }
  ],

  coachPrompts: {
    general:
      "We will practice Congolese languages with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Mbote na yo.", expand: "Add how you're doing." },
    { answer: "Nazali malamu.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Keba", meaning: "Be careful" },
    { term: "Sango nini?", meaning: "What's the news?" },
    { term: "Moto", meaning: "Person" }
  ],

  pronunciationNotes: [
    "Kituba is smoother and simpler than Lingala.",
    "French influence is strong in urban areas."
  ],

  culturalNotes: [
    "Music and rhythm influence speech patterns.",
    "Kituba is widely used as a lingua franca."
  ]
};
