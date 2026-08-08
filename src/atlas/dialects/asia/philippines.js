export default {
  id: "philippines",
  name: "Philippines",
  dialects: [
    { id: "ph-tagalog", name: "Tagalog" },
    { id: "ph-taglish", name: "Taglish (Tagalog-English mix)" }
  ],

  speakingTutors: [
    { name: "Miguel", vibe: "Warm, friendly" },
    { name: "Paolo", vibe: "Relaxed, casual" },
    { name: "Rafael", vibe: "Calm, steady" },
    { name: "Ana", vibe: "Soft, supportive" },
    { name: "Lara", vibe: "Gentle, melodic" },
    { name: "Jasmine", vibe: "Warm, expressive" },
    { name: "Marco", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Tagalog and Taglish with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Kamusta ka?", expand: "Add how you’re feeling." },
    { answer: "Ayos lang.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Astig", meaning: "Cool / tough" },
    { term: "Grabe", meaning: "Wow / intense" },
    { term: "Okay lang", meaning: "It’s okay / I’m fine" }
  ],

  pronunciationNotes: [
    "Tagalog has clear vowels and simple stress patterns.",
    "Taglish mixes English words into Tagalog structure."
  ],

  culturalNotes: [
    "Speech is often warm, humorous, and expressive.",
    "Code-switching is a natural part of everyday talk."
  ]
};
