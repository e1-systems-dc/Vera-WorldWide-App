export default {
  id: "belgium",
  name: "Belgium",
  dialects: [
    { id: "be-french", name: "Belgian French" },
    { id: "be-dutch", name: "Flemish Dutch" }
  ],

  speakingTutors: [
    { name: "Milan", vibe: "Warm, friendly" },
    { name: "Jens", vibe: "Relaxed, casual" },
    { name: "Tibo", vibe: "Calm, steady" },
    { name: "Lotte", vibe: "Soft, supportive" },
    { name: "Elise", vibe: "Gentle, melodic" },
    { name: "Nina", vibe: "Warm, expressive" },
    { name: "Arno", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Belgian French and Flemish Dutch with a warm, friendly tone."
  },

  starterPhrases: [
    { answer: "Ça va ?", expand: "Add how you're feeling." },
    { answer: "Goed hoor.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Ça roule", meaning: "All good" },
    { term: "Amai", meaning: "Wow" },
    { term: "Ça va", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Belgian French is clearer and less nasal than Parisian French.",
    "Flemish Dutch has softer consonants than Dutch from the Netherlands."
  ],

  culturalNotes: [
    "Speech is friendly and polite.",
    "Multilingual switching is common."
  ]
};
