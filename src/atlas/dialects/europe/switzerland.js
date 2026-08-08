export default {
  id: "switzerland",
  name: "Switzerland",
  dialects: [
    { id: "ch-german", name: "Swiss German" },
    { id: "ch-french", name: "Swiss French" },
    { id: "ch-italian", name: "Swiss Italian" }
  ],

  speakingTutors: [
    { name: "Lorin", vibe: "Warm, friendly" },
    { name: "Yann", vibe: "Relaxed, casual" },
    { name: "Silvan", vibe: "Calm, steady" },
    { name: "Elin", vibe: "Soft, supportive" },
    { name: "Mira", vibe: "Gentle, melodic" },
    { name: "Giulia", vibe: "Warm, expressive" },
    { name: "Nino", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Swiss languages with a warm, multilingual tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Wie gaht’s?", expand: "Add how you're feeling." },
    { answer: "Ça va.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Guet", meaning: "Good" },
    { term: "Mega", meaning: "Very / super" },
    { term: "Okay", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Swiss German varies heavily by region.",
    "Swiss French is clearer and less nasal."
  ],

  culturalNotes: [
    "Speech is polite and calm.",
    "Multilingual switching is common."
  ]
};
