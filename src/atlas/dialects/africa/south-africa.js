export default {
  id: "south-africa",
  name: "South Africa",
  dialects: [
    { id: "za-zulu", name: "Zulu" },
    { id: "za-xhosa", name: "Xhosa" },
    { id: "za-afrikaans", name: "Afrikaans" },
    { id: "za-sotho", name: "Sesotho" },
    { id: "za-tswana", name: "Setswana" },
    { id: "za-english", name: "South African English" }
  ],

  speakingTutors: [
    { name: "Thabo", vibe: "Warm, friendly, Johannesburg energy" },
    { name: "Sibusiso", vibe: "Calm, steady" },
    { name: "Luthando", vibe: "Relaxed, expressive" },
    { name: "Anika", vibe: "Soft, Afrikaans clarity" },
    { name: "Mariska", vibe: "Warm, supportive" },
    { name: "Naledi", vibe: "Gentle, melodic" },
    { name: "Kagiso", vibe: "Clear, structured" },
    { name: "Ayanda", vibe: "Modern, upbeat" },
    { name: "Zanele", vibe: "Friendly, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice South African languages with a warm, expressive tone. Keep it natural and rhythmic."
  },

  starterPhrases: [
    { answer: "Unjani?", expand: "Add how you're feeling." },
    { answer: "Ngikhona.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Bru", meaning: "Bro / friend" },
    { term: "Lekker", meaning: "Nice / good" },
    { term: "Howzit", meaning: "How are you" }
  ],

  pronunciationNotes: [
    "Zulu and Xhosa use click consonants.",
    "South African English has a distinct vowel shape."
  ],

  culturalNotes: [
    "South Africa has 11 official languages.",
    "Speech varies widely by region and culture."
  ]
};
