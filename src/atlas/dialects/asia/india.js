export default {
  id: "india",
  name: "India",
  dialects: [
    { id: "in-hindi", name: "Hindi" },
    { id: "in-hinglish", name: "Hinglish" },
    { id: "in-bengali", name: "Bengali (India)" },
    { id: "in-tamil", name: "Tamil" },
    { id: "in-telugu", name: "Telugu" },
    { id: "in-kannada", name: "Kannada" },
    { id: "in-malayalam", name: "Malayalam" },
    { id: "in-marathi", name: "Marathi" },
    { id: "in-punjabi", name: "Punjabi (India)" }
  ],

  speakingTutors: [
    { name: "Arjun", vibe: "Warm, friendly" },
    { name: "Rohan", vibe: "Calm, steady" },
    { name: "Kabir", vibe: "Relaxed, casual" },
    { name: "Aisha", vibe: "Soft, supportive" },
    { name: "Meera", vibe: "Warm, expressive" },
    { name: "Ananya", vibe: "Gentle, melodic" },
    { name: "Dev", vibe: "Clear, structured" },
    { name: "Zara", vibe: "Modern, upbeat" },
    { name: "Ishaan", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Indian languages with a warm, friendly tone. Keep it natural, expressive, and conversational."
  },

  starterPhrases: [
    { answer: "Kaise ho?", expand: "Add how you're feeling." },
    { answer: "Main theek hoon.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yaar", meaning: "Friend / bro" },
    { term: "Scene kya hai?", meaning: "What's going on?" },
    { term: "Jhakaas", meaning: "Awesome" }
  ],

  pronunciationNotes: [
    "Indian English has retroflex consonants.",
    "Hindi uses clear vowel sounds and rhythmic stress."
  ],

  culturalNotes: [
    "India has hundreds of languages; tone varies by region.",
    "Speech is expressive, warm, and rhythmic."
  ]
};
