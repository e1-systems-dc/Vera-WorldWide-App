export default {
  id: "andorra",
  name: "Andorra",
  dialects: [
    { id: "ad-catalan", name: "Catalan" },
    { id: "ad-spanish", name: "Spanish" },
    { id: "ad-french", name: "French" }
  ],

  speakingTutors: [
    { name: "Oriol", vibe: "Warm, friendly" },
    { name: "Nil", vibe: "Relaxed, casual" },
    { name: "Marc", vibe: "Calm, steady" },
    { name: "Laia", vibe: "Soft, supportive" },
    { name: "Clara", vibe: "Gentle, melodic" },
    { name: "Iris", vibe: "Warm, expressive" },
    { name: "Pol", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Catalan with a warm, multilingual tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Com estàs?", expand: "Add how you're feeling." },
    { answer: "Estic bé.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Guai", meaning: "Cool" },
    { term: "Vale", meaning: "Okay" },
    { term: "Top", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Catalan has clear vowels and soft consonants.",
    "Spanish and French influence pronunciation."
  ],

  culturalNotes: [
    "Speech is warm and multilingual.",
    "Catalan is the main everyday language."
  ]
};
