export default {
  id: "dominica",
  name: "Dominica",
  dialects: [
    { id: "dm-english", name: "Dominican English" },
    { id: "dm-creole", name: "Kwéyòl (Dominican Creole)" }
  ],

  speakingTutors: [
    { name: "Darren", vibe: "Warm, friendly" },
    { name: "Malik", vibe: "Relaxed, casual" },
    { name: "Andre", vibe: "Calm, steady" },
    { name: "Keisha", vibe: "Soft, supportive" },
    { name: "Aaliyah", vibe: "Gentle, melodic" },
    { name: "Maya", vibe: "Warm, expressive" },
    { name: "Zion", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Dominican English and Kwéyòl with a warm, rhythmic tone. Keep it expressive and natural."
  },

  starterPhrases: [
    { answer: "Wha you sayin'?", expand: "Add how you're feeling." },
    { answer: "Ah good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bon bagay", meaning: "Good stuff" },
    { term: "Ok", meaning: "Okay" },
    { term: "Nice up", meaning: "Make it better" }
  ],

  pronunciationNotes: [
    "Kwéyòl has rhythmic intonation and French influence.",
    "English is widely spoken with local patterns."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Music and rhythm influence conversational style."
  ]
};
