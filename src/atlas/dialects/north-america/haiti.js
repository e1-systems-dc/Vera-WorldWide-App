export default {
  id: "haiti",
  name: "Haiti",
  dialects: [
    { id: "ht-kreyol", name: "Haitian Creole" },
    { id: "ht-french", name: "Haitian French" }
  ],

  speakingTutors: [
    { name: "Jean", vibe: "Warm, friendly" },
    { name: "Marc", vibe: "Relaxed, casual" },
    { name: "Samuel", vibe: "Calm, steady" },
    { name: "Nadia", vibe: "Soft, supportive" },
    { name: "Mireille", vibe: "Gentle, melodic" },
    { name: "Alisha", vibe: "Warm, expressive" },
    { name: "Kervens", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Haitian Creole with a warm, rhythmic tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Kijan ou ye?", expand: "Add how you're feeling." },
    { answer: "Mwen byen.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "N'ap boule", meaning: "We're good" },
    { term: "Anmwe", meaning: "Wow / hey" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Haitian Creole has smooth vowels and rhythmic flow.",
    "French influence is strong in vocabulary."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music and rhythm influence conversational style."
  ]
};
