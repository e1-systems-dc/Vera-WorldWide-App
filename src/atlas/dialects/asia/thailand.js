export default {
  id: "thailand",
  name: "Thailand",
  dialects: [
    { id: "th-bangkok", name: "Central Thai (Bangkok)" }
  ],

  speakingTutors: [
    { name: "Narin", vibe: "Calm, friendly" },
    { name: "Krit", vibe: "Relaxed, casual" },
    { name: "Pong", vibe: "Steady, patient" },
    { name: "Mali", vibe: "Soft, supportive" },
    { name: "Noi", vibe: "Gentle, melodic" },
    { name: "Dao", vibe: "Warm, expressive" },
    { name: "Tawan", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Thai with a soft, friendly tone. Keep tones gentle and natural."
  },

  starterPhrases: [
    { answer: "สบายดีไหม?", expand: "Add how you’re feeling." },
    { answer: "สบายดี.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "สุดยอด", meaning: "Awesome" },
    { term: "โอเค", meaning: "Okay" },
    { term: "ชิล", meaning: "Chill / relaxed" }
  ],

  pronunciationNotes: [
    "Thai is tonal; pitch changes meaning.",
    "Central Thai is the standard for media and education."
  ],

  culturalNotes: [
    "Speech is often gentle and polite.",
    "Particles at the end of sentences soften tone."
  ]
};
