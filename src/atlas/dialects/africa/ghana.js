export default {
  id: "ghana",
  name: "Ghana",
  dialects: [
    { id: "gh-twi", name: "Twi (Akan)" },
    { id: "gh-ewe", name: "Ewe" },
    { id: "gh-ga", name: "Ga" },
    { id: "gh-pidgin", name: "Ghanaian Pidgin" }
  ],

  speakingTutors: [
    { name: "Kwame", vibe: "Warm, classic Ghanaian friendliness" },
    { name: "Kojo", vibe: "Calm, patient" },
    { name: "Yaw", vibe: "Upbeat, expressive" },
    { name: "Ama", vibe: "Friendly, motherly" },
    { name: "Akosua", vibe: "Soft, supportive" },
    { name: "Esi", vibe: "Youthful, modern" },
    { name: "Selorm", vibe: "Ga clarity, steady" },
    { name: "Mawuli", vibe: "Ewe tone, calm" },
    { name: "Naa", vibe: "Warm, gentle" }
  ],

  coachPrompts: {
    general:
      "We will practice Ghanaian languages with a warm, melodic tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Wo ho te sɛn?", expand: "Add how you're feeling." },
    { answer: "Me ho yɛ.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Chale", meaning: "Friend / dude" },
    { term: "Wossop", meaning: "What's up?" },
    { term: "Kraaa", meaning: "At all" }
  ],

  pronunciationNotes: [
    "Twi is tonal with smooth vowel transitions.",
    "Ghanaian Pidgin is softer than Nigerian Pidgin."
  ],

  culturalNotes: [
    "Ghanaian speech is known for warmth and politeness.",
    "Twi is widely spoken across the country."
  ]
};
