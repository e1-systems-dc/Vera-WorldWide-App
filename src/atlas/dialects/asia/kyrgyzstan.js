export default {
  id: "kyrgyzstan",
  name: "Kyrgyzstan",
  dialects: [
    { id: "kg-kyrgyz", name: "Kyrgyz" },
    { id: "kg-russian", name: "Kyrgyzstani Russian" }
  ],

  speakingTutors: [
    { name: "Nursultan", vibe: "Warm, friendly" },
    { name: "Bakyt", vibe: "Calm, steady" },
    { name: "Tilek", vibe: "Relaxed, casual" },
    { name: "Aizada", vibe: "Soft, supportive" },
    { name: "Meerim", vibe: "Warm, expressive" },
    { name: "Ainura", vibe: "Gentle, melodic" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Mira", vibe: "Clear, friendly" },
    { name: "Daniyar", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Kyrgyz with a warm, smooth tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Kandaisyn?", expand: "Add how you're doing." },
    { answer: "Jakshy.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Molodets", meaning: "Good job" },
    { term: "Norm", meaning: "Okay" },
    { term: "Bro", meaning: "Friend" }
  ],

  pronunciationNotes: [
    "Kyrgyz uses vowel harmony and soft consonants.",
    "Russian influence is strong in cities."
  ],

  culturalNotes: [
    "Kyrgyz culture blends Turkic and nomadic traditions.",
    "Speech is warm, calm, and melodic."
  ]
};
