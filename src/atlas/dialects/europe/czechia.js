export default {
  id: "czechia",
  name: "Czechia",
  dialects: [
    { id: "cz-czech", name: "Czech" }
  ],

  speakingTutors: [
    { name: "Jakub", vibe: "Warm, friendly" },
    { name: "Adam", vibe: "Relaxed, casual" },
    { name: "Tomas", vibe: "Calm, steady" },
    { name: "Ema", vibe: "Soft, supportive" },
    { name: "Anna", vibe: "Gentle, melodic" },
    { name: "Nela", vibe: "Warm, expressive" },
    { name: "Viktor", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Czech with a warm, clear tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Jak se máš?", expand: "Add how you're feeling." },
    { answer: "Dobře.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Super", meaning: "Great" },
    { term: "Fajn", meaning: "Nice" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Czech has long and short vowels.",
    "Ř is a unique sound requiring practice."
  ],

  culturalNotes: [
    "Speech is calm and polite.",
    "Humor is subtle and dry."
  ]
};
