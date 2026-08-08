export default {
  id: "bangladesh",
  name: "Bangladesh",
  dialects: [
    { id: "bd-bengali", name: "Bengali (Bangla)" },
    { id: "bd-chittagonian", name: "Chittagonian" }
  ],

  speakingTutors: [
    { name: "Arif", vibe: "Warm, friendly" },
    { name: "Hasan", vibe: "Calm, steady" },
    { name: "Rafi", vibe: "Relaxed, casual" },
    { name: "Maliha", vibe: "Soft, supportive" },
    { name: "Nusrat", vibe: "Warm, expressive" },
    { name: "Tania", vibe: "Gentle, melodic" },
    { name: "Zara", vibe: "Modern, upbeat" },
    { name: "Arman", vibe: "Clear, friendly" },
    { name: "Mira", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Bangla with a warm, melodic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Kemon acho?", expand: "Add how you're feeling." },
    { answer: "Ami bhalo achi.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Bhai", meaning: "Bro / friend" },
    { term: "Fatafati", meaning: "Awesome" },
    { term: "Ektu", meaning: "A little" }
  ],

  pronunciationNotes: [
    "Bangla is soft and melodic with open vowels.",
    "Chittagonian has distinct rhythm and tone."
  ],

  culturalNotes: [
    "Bangla is known for poetic expression.",
    "Speech is warm, rhythmic, and gentle."
  ]
};
