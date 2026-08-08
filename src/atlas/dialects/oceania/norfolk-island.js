export default {
  id: "norfolk-island",
  name: "Norfolk Island",
  dialects: [
    { id: "nf-norfuk", name: "Norfuk (Norfolk Creole)" },
    { id: "nf-english", name: "Norfolk English" }
  ],

  speakingTutors: [
    { name: "Evan", vibe: "Warm, friendly" },
    { name: "Liam", vibe: "Relaxed, casual" },
    { name: "Noah", vibe: "Calm, steady" },
    { name: "Amelia", vibe: "Soft, supportive" },
    { name: "Sophie", vibe: "Gentle, melodic" },
    { name: "Chloe", vibe: "Warm, expressive" },
    { name: "Aiden", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Norfuk with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Watawieh?", expand: "Add how you're feeling." },
    { answer: "Orlright.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Watawieh", meaning: "Hello" },
    { term: "Orlright", meaning: "Okay" },
    { term: "Gud", meaning: "Good" }
  ],

  pronunciationNotes: [
    "Norfuk blends English and Pitkern influences.",
    "Speech is rhythmic and soft."
  ],

  culturalNotes: [
    "Speech is warm and friendly.",
    "Island culture shapes conversational style."
  ]
};
