export default {
  id: "belarus",
  name: "Belarus",
  dialects: [
    { id: "by-belarusian", name: "Belarusian" },
    { id: "by-russian", name: "Russian (Belarus)" }
  ],

  speakingTutors: [
    { name: "Artem", vibe: "Warm, friendly" },
    { name: "Mikita", vibe: "Relaxed, casual" },
    { name: "Yaroslav", vibe: "Calm, steady" },
    { name: "Alina", vibe: "Soft, supportive" },
    { name: "Darya", vibe: "Gentle, melodic" },
    { name: "Liza", vibe: "Warm, expressive" },
    { name: "Kiril", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Belarusian and local Russian with a warm, neutral tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Як ты?", expand: "Add how you're feeling." },
    { answer: "Добра.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Крута", meaning: "Cool" },
    { term: "Нармальна", meaning: "Okay" },
    { term: "Супер", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Belarusian has soft consonants and open vowels.",
    "Local Russian has distinct intonation patterns."
  ],

  culturalNotes: [
    "Speech is calm and polite.",
    "Warmth and hospitality shape everyday conversation."
  ]
};
