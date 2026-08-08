export default {
  id: "nauru",
  name: "Nauru",
  dialects: [
    { id: "nr-nauruan", name: "Nauruan" },
    { id: "nr-english", name: "Nauru English" }
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
      "We will practice Nauruan with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Wanga?", expand: "Add how you're feeling." },
    { answer: "Eiyu.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Eiyu", meaning: "Good" },
    { term: "Ok", meaning: "Okay" },
    { term: "Ia", meaning: "Yes" }
  ],

  pronunciationNotes: [
    "Nauruan has open vowels and rhythmic flow.",
    "Speech is gentle and melodic."
  ],

  culturalNotes: [
    "Speech is warm and respectful.",
    "Community values shape conversation."
  ]
};
