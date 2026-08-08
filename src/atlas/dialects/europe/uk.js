export default {
  id: "united-kingdom",
  name: "United Kingdom",
  dialects: [
    { id: "uk-british", name: "British English" },
    { id: "uk-scottish", name: "Scottish English" },
    { id: "uk-welsh", name: "Welsh English" }
  ],

  speakingTutors: [
    { name: "Oliver", vibe: "Calm, friendly" },
    { name: "Harry", vibe: "Relaxed, casual" },
    { name: "Alfie", vibe: "Steady, patient" },
    { name: "Amelia", vibe: "Soft, supportive" },
    { name: "Isla", vibe: "Warm, expressive" },
    { name: "Freya", vibe: "Gentle, melodic" },
    { name: "Theo", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice UK English with a clear, natural tone. Keep it friendly and steady."
  },

  starterPhrases: [
    { answer: "How are you getting on?", expand: "Add how you're feeling." },
    { answer: "Not bad.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Brilliant", meaning: "Great" },
    { term: "Cheers", meaning: "Thanks" },
    { term: "Alright", meaning: "Hello / okay" }
  ],

  pronunciationNotes: [
    "UK English varies widely by region.",
    "RP is clear and neutral; Scottish has rolled R’s."
  ],

  culturalNotes: [
    "Speech is polite and often understated.",
    "Humor is dry and subtle."
  ]
};
