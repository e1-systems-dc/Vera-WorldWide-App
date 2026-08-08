export default {
  id: "denmark",
  name: "Denmark",
  dialects: [
    { id: "dk-danish", name: "Danish" }
  ],

  speakingTutors: [
    { name: "Mikkel", vibe: "Calm, friendly" },
    { name: "Jonas", vibe: "Relaxed, casual" },
    { name: "Emil", vibe: "Steady, patient" },
    { name: "Freja", vibe: "Soft, supportive" },
    { name: "Sofie", vibe: "Warm, expressive" },
    { name: "Ida", vibe: "Gentle, melodic" },
    { name: "Lukas", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Danish with a warm, relaxed tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Hvordan går det?", expand: "Add how you're feeling." },
    { answer: "Det går godt.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Fedt", meaning: "Cool" },
    { term: "Hyggeligt", meaning: "Cozy / pleasant" },
    { term: "Okay", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Danish has soft consonants and reduced endings.",
    "Rhythm is smooth and flowing."
  ],

  culturalNotes: [
    "Speech is often calm and understated.",
    "Humor is subtle and warm."
  ]
};
