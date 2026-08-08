export default {
  id: "kiribati",
  name: "Kiribati",
  dialects: [
    { id: "ki-gilbertese", name: "Gilbertese (Kiribati)" },
    { id: "ki-english", name: "Kiribati English" }
  ],

  speakingTutors: [
    { name: "Tama", vibe: "Warm, friendly" },
    { name: "Mika", vibe: "Relaxed, casual" },
    { name: "Lio", vibe: "Calm, steady" },
    { name: "Aroha", vibe: "Soft, supportive" },
    { name: "Mele", vibe: "Gentle, melodic" },
    { name: "Lani", vibe: "Warm, expressive" },
    { name: "Sina", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Gilbertese with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Mauri", expand: "Add how you're feeling." },
    { answer: "Mauri n te bong.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Mauri", meaning: "Hello" },
    { term: "Ko rabwa", meaning: "Thank you" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Gilbertese has open vowels and rhythmic flow.",
    "Speech is gentle and melodic."
  ],

  culturalNotes: [
    "Speech is warm and respectful.",
    "Community values shape conversation."
  ]
};
