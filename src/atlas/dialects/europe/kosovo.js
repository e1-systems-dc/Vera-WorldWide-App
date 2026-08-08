export default {
  id: "kosovo",
  name: "Kosovo",
  dialects: [
    { id: "xk-albanian", name: "Albanian (Kosovo)" },
    { id: "xk-serbian", name: "Serbian (Kosovo)" }
  ],

  speakingTutors: [
    { name: "Arben", vibe: "Warm, friendly" },
    { name: "Luan", vibe: "Relaxed, casual" },
    { name: "Driton", vibe: "Calm, steady" },
    { name: "Arta", vibe: "Soft, supportive" },
    { name: "Besa", vibe: "Gentle, melodic" },
    { name: "Mira", vibe: "Warm, expressive" },
    { name: "Niko", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Albanian and Serbian with a warm, neutral tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Si je?", expand: "Add how you're feeling." },
    { answer: "Dobro sam.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Shumë mirë", meaning: "Very good" },
    { term: "Super", meaning: "Great" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Kosovar Albanian has distinct rhythm.",
    "Serbian uses both Cyrillic and Latin scripts."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality is central to conversation."
  ]
};
