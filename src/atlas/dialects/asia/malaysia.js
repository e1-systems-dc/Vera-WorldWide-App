export default {
  id: "malaysia",
  name: "Malaysia",
  dialects: [
    { id: "my-malay", name: "Malay (Bahasa Melayu)" },
    { id: "my-manglish", name: "Manglish (Malay-English mix)" }
  ],

  speakingTutors: [
    { name: "Hakim", vibe: "Warm, friendly" },
    { name: "Farhan", vibe: "Relaxed, casual" },
    { name: "Imran", vibe: "Calm, steady" },
    { name: "Aina", vibe: "Soft, supportive" },
    { name: "Nadia", vibe: "Gentle, melodic" },
    { name: "Syafiqah", vibe: "Warm, expressive" },
    { name: "Zara", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Malay with a warm, easygoing tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Apa khabar?", expand: "Add how you’re feeling." },
    { answer: "Baik saja.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Lah", meaning: "Softener / emphasis particle" },
    { term: "Syok", meaning: "Fun / enjoyable" },
    { term: "Ok je", meaning: "It’s okay / fine" }
  ],

  pronunciationNotes: [
    "Malay pronunciation is clear and syllable-based.",
    "Manglish mixes English phrases with Malay rhythm."
  ],

  culturalNotes: [
    "Speech is often gentle and polite.",
    "Code-switching with English is common in cities."
  ]
};
