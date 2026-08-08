export default {
  id: "somalia",
  name: "Somalia",
  dialects: [
    { id: "so-somali", name: "Somali" },
    { id: "so-maay", name: "Maay Maay" },
    { id: "so-arabic", name: "Somali Arabic" }
  ],

  speakingTutors: [
    { name: "Abdirahman", vibe: "Warm, friendly" },
    { name: "Hassan", vibe: "Calm, steady" },
    { name: "Yusuf", vibe: "Relaxed, casual" },
    { name: "Amina", vibe: "Soft, supportive" },
    { name: "Hodan", vibe: "Warm, expressive" },
    { name: "Fartun", vibe: "Gentle, melodic" },
    { name: "Mohamed", vibe: "Clear, structured" },
    { name: "Nasteho", vibe: "Calm, patient" },
    { name: "Sagal", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Somali with a warm, steady tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Iska warran?", expand: "Add how you're doing." },
    { answer: "Waan fiicanahay.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Waryaa", meaning: "Hey / bro" },
    { term: "Haye", meaning: "Okay" },
    { term: "Baasto", meaning: "Pasta (common food)" }
  ],

  pronunciationNotes: [
    "Somali is tonal with long vowels.",
    "Speech is fast and expressive."
  ],

  culturalNotes: [
    "Somali poetry influences speech rhythm.",
    "Arabic influence is strong in vocabulary."
  ]
};
