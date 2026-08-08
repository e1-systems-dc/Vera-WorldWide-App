export default {
  id: "vanuatu",
  name: "Vanuatu",
  dialects: [
    { id: "vu-bislama", name: "Bislama" },
    { id: "vu-english", name: "Vanuatu English" },
    { id: "vu-french", name: "Vanuatu French" }
  ],

  speakingTutors: [
    { name: "Kalo", vibe: "Warm, friendly" },
    { name: "Mani", vibe: "Relaxed, casual" },
    { name: "Savi", vibe: "Calm, steady" },
    { name: "Lani", vibe: "Soft, supportive" },
    { name: "Mira", vibe: "Gentle, melodic" },
    { name: "Tari", vibe: "Warm, expressive" },
    { name: "Jemi", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Bislama with a warm, friendly tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Yu oraet?", expand: "Add how you're feeling." },
    { answer: "Mi oraet.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Gudfala", meaning: "Good" },
    { term: "Ok", meaning: "Okay" },
    { term: "Tru", meaning: "Really" }
  ],

  pronunciationNotes: [
    "Bislama has rhythmic intonation and smooth vowels.",
    "Speech is warm and expressive."
  ],

  culturalNotes: [
    "Speech is friendly and welcoming.",
    "Multilingual switching is common."
  ]
};
