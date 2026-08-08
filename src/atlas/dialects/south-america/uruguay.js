export default {
  id: "uruguay",
  name: "Uruguay",
  dialects: [
    { id: "uy-spanish", name: "Rioplatense Spanish (Uruguay)" }
  ],

  speakingTutors: [
    { name: "Santiago", vibe: "Warm, friendly" },
    { name: "Mateo", vibe: "Relaxed, casual" },
    { name: "Thiago", vibe: "Calm, steady" },
    { name: "Valentina", vibe: "Soft, supportive" },
    { name: "Camila", vibe: "Gentle, melodic" },
    { name: "Martina", vibe: "Warm, expressive" },
    { name: "Luca", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Uruguayan Rioplatense Spanish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Cómo andás?", expand: "Add how you're feeling." },
    { answer: "Todo bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bo", meaning: "Hey" },
    { term: "Ta", meaning: "Okay" },
    { term: "Dale", meaning: "Go ahead" }
  ],

  pronunciationNotes: [
    "Uruguayan Spanish uses 'sh' or 'zh' for 'll' and 'y'.",
    "Speech is expressive and melodic."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Mate culture influences social interaction."
  ]
};
