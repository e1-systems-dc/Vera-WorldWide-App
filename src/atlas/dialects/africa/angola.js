export default {
  id: "angola",
  name: "Angola",
  dialects: [
    { id: "ao-portuguese", name: "Angolan Portuguese" },
    { id: "ao-kimbundu", name: "Kimbundu" },
    { id: "ao-umbundu", name: "Umbundu" },
    { id: "ao-kikongo", name: "Kikongo" }
  ],

  speakingTutors: [
    { name: "Osvaldo", vibe: "Warm, friendly" },
    { name: "Domingos", vibe: "Calm, steady" },
    { name: "Mateus", vibe: "Relaxed, casual" },
    { name: "Carla", vibe: "Soft, supportive" },
    { name: "Luisa", vibe: "Warm, expressive" },
    { name: "Nair", vibe: "Gentle, melodic" },
    { name: "Felisberto", vibe: "Clear, structured" },
    { name: "Zuleica", vibe: "Calm, patient" },
    { name: "Adilson", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Angolan Portuguese with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Tudo fixe?", expand: "Add how you're doing." },
    { answer: "Estou bem.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Bué", meaning: "A lot" },
    { term: "Fiche", meaning: "Cool" },
    { term: "Bazar", meaning: "To go" }
  ],

  pronunciationNotes: [
    "Angolan Portuguese is rhythmic and melodic.",
    "Bantu languages influence vowel patterns."
  ],

  culturalNotes: [
    "Portuguese is widely spoken alongside many Bantu languages.",
    "Speech is warm and expressive."
  ]
};
