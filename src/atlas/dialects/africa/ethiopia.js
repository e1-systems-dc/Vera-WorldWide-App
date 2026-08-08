export default {
  id: "ethiopia",
  name: "Ethiopia",
  dialects: [
    { id: "et-amharic", name: "Amharic" },
    { id: "et-oromo", name: "Oromo" },
    { id: "et-tigrinya", name: "Tigrinya" },
    { id: "et-somali", name: "Ethiopian Somali" }
  ],

  speakingTutors: [
    { name: "Abebe", vibe: "Warm, classic Amharic tone" },
    { name: "Kebede", vibe: "Calm, steady" },
    { name: "Tesfaye", vibe: "Relaxed, casual" },
    { name: "Mekdes", vibe: "Soft, supportive" },
    { name: "Hanna", vibe: "Warm, expressive" },
    { name: "Selam", vibe: "Gentle, melodic" },
    { name: "Biruk", vibe: "Clear, structured" },
    { name: "Rahel", vibe: "Calm, patient" },
    { name: "Yonas", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Amharic with a warm, steady tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Selam.", expand: "Add how you're doing." },
    { answer: "Dehna negn.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Ishi", meaning: "Okay" },
    { term: "Konjo", meaning: "Beautiful / nice" },
    { term: "Betam", meaning: "Very" }
  ],

  pronunciationNotes: [
    "Amharic uses ejective consonants.",
    "Speech is rhythmic and expressive."
  ],

  culturalNotes: [
    "Ethiopia has over 80 languages.",
    "Amharic is widely used in urban areas."
  ]
};
