export default {
  id: "christmas-island",
  name: "Christmas Island",
  dialects: [
    { id: "cx-english", name: "Christmas Island English" },
    { id: "cx-malayan", name: "Malay (local)" },
    { id: "cx-chinese", name: "Chinese (local)" }
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
      "We will practice local English with a warm, clear tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "How’s things?", expand: "Add how you're feeling." },
    { answer: "All good.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Can", meaning: "Okay" },
    { term: "Lah", meaning: "Soft emphasis" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "English is spoken with Malay and Chinese influence.",
    "Speech rhythm is calm and steady."
  ],

  culturalNotes: [
    "Speech is friendly and polite.",
    "Multilingual switching is common."
  ]
};
