export default {
  id: "bulgaria",
  name: "Bulgaria",
  dialects: [
    { id: "bg-bulgarian", name: "Bulgarian" }
  ],

  speakingTutors: [
    { name: "Ivan", vibe: "Warm, friendly" },
    { name: "Nikolay", vibe: "Relaxed, casual" },
    { name: "Stefan", vibe: "Calm, steady" },
    { name: "Elena", vibe: "Soft, supportive" },
    { name: "Mira", vibe: "Gentle, melodic" },
    { name: "Vesela", vibe: "Warm, expressive" },
    { name: "Darin", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Bulgarian with a warm, steady tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Как си?", expand: "Add how you're feeling." },
    { answer: "Добре съм.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Супер", meaning: "Great" },
    { term: "Яко", meaning: "Cool" },
    { term: "Ок", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Bulgarian has soft consonants and clear vowels.",
    "Stress varies by word."
  ],

  culturalNotes: [
    "Speech is warm and polite.",
    "Hospitality is reflected in conversation."
  ]
};
