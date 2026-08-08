export default {
  id: "djibouti",
  name: "Djibouti",
  dialects: [
    { id: "dj-somali", name: "Somali (Djibouti)" },
    { id: "dj-afar", name: "Afar" },
    { id: "dj-arabic", name: "Djiboutian Arabic" },
    { id: "dj-french", name: "Djiboutian French" }
  ],

  speakingTutors: [
    { name: "Abdoul", vibe: "Warm, friendly" },
    { name: "Mahad", vibe: "Calm, steady" },
    { name: "Yahye", vibe: "Relaxed, casual" },
    { name: "Saado", vibe: "Soft, supportive" },
    { name: "Roda", vibe: "Warm, expressive" },
    { name: "Filsan", vibe: "Gentle, melodic" },
    { name: "Hamdi", vibe: "Clear, structured" },
    { name: "Nimo", vibe: "Calm, patient" },
    { name: "Samsam", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Djiboutian Somali and Afar with a warm, steady tone. Keep responses natural and expressive."
  },

  starterPhrases: [
    { answer: "Iska warran?", expand: "Add how you're doing." },
    { answer: "Waan fiicanahay.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Haye", meaning: "Okay" },
    { term: "Waryaa", meaning: "Hey / bro" },
    { term: "Macaan", meaning: "Sweet / nice" }
  ],

  pronunciationNotes: [
    "Djiboutian Somali is softer than northern Somali.",
    "Afar has strong consonants and open vowels.",
    "French influence is strong in urban speech."
  ],

  culturalNotes: [
    "Djibouti blends Somali, Afar, Arabic, and French influences.",
    "Speech is warm, rhythmic, and expressive."
  ]
};
