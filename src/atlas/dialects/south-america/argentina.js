export default {
  id: "argentina",
  name: "Argentina",
  dialects: [
    { id: "ar-spanish", name: "Rioplatense Spanish" }
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
      "We will practice Rioplatense Spanish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "¿Cómo andás?", expand: "Add how you're feeling." },
    { answer: "Todo bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Che", meaning: "Hey" },
    { term: "Boludo", meaning: "Dude / friend (casual)" },
    { term: "Dale", meaning: "Okay / go ahead" }
  ],

  pronunciationNotes: [
    "Rioplatense Spanish uses 'sh' or 'zh' for 'll' and 'y'.",
    "Speech is expressive and melodic."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Storytelling is common in conversation."
  ]
};
