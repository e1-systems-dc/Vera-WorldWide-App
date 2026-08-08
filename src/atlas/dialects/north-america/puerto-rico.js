export default {
  id: "puerto-rico",
  name: "Puerto Rico",
  dialects: [
    { id: "pr-spanish", name: "Puerto Rican Spanish" },
    { id: "pr-english", name: "Puerto Rican English" }
  ],

  speakingTutors: [
    { name: "Javier", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Carlos", vibe: "Calm, steady" },
    { name: "Camila", vibe: "Soft, supportive" },
    { name: "Sofía", vibe: "Gentle, melodic" },
    { name: "Mariana", vibe: "Warm, expressive" },
    { name: "Gael", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Puerto Rican Spanish with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "¿Qué hay?", expand: "Add how you're feeling." },
    { answer: "Todo bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Boricua", meaning: "Puerto Rican person" },
    { term: "Nítido", meaning: "Great" },
    { term: "Dale", meaning: "Okay / go ahead" }
  ],

  pronunciationNotes: [
    "Puerto Rican Spanish has soft consonants and rhythmic flow.",
    "English influence is common in vocabulary."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music influences conversational rhythm."
  ]
};
