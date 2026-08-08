export default {
  id: "mexico",
  name: "Mexico",
  dialects: [
    { id: "mx-spanish", name: "Mexican Spanish" }
  ],

  speakingTutors: [
    { name: "Diego", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Javier", vibe: "Calm, steady" },
    { name: "Ana", vibe: "Soft, supportive" },
    { name: "Camila", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Gael", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Mexican Spanish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Cómo estás?", expand: "Add how you're feeling." },
    { answer: "Estoy bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Órale", meaning: "Wow / okay / let's go" },
    { term: "Chido", meaning: "Cool" },
    { term: "Vale", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Mexican Spanish has clear vowels and steady rhythm.",
    "Diminutives (-ito/-ita) are common."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality and friendliness shape conversation."
  ]
};
