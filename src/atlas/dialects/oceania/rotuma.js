export default {
  id: "rotuma",
  name: "Rotuma",
  dialects: [
    { id: "rt-rotuman", name: "Rotuman" },
    { id: "rt-english", name: "Rotuma English" }
  ],

  speakingTutors: [
    { name: "Jone", vibe: "Warm, friendly" },
    { name: "Manoa", vibe: "Relaxed, casual" },
    { name: "Samu", vibe: "Calm, steady" },
    { name: "Litia", vibe: "Soft, supportive" },
    { name: "Mere", vibe: "Gentle, melodic" },
    { name: "Ana", vibe: "Warm, expressive" },
    { name: "Ratu", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Rotuman with a warm, melodic tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Noa’ia", expand: "Add how you're feeling." },
    { answer: "Faiaksea.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Faiaksea", meaning: "Good" },
    { term: "Noa’ia", meaning: "Hello" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Rotuman has unique vowel shifts and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is respectful and expressive.",
    "Community values shape conversation."
  ]
};
