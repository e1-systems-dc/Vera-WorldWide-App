export default {
  id: "iceland",
  name: "Iceland",
  dialects: [
    { id: "is-icelandic", name: "Icelandic" }
  ],

  speakingTutors: [
    { name: "Aron", vibe: "Calm, friendly" },
    { name: "Bjorn", vibe: "Relaxed, casual" },
    { name: "Einar", vibe: "Steady, patient" },
    { name: "Sara", vibe: "Soft, supportive" },
    { name: "Lilja", vibe: "Gentle, melodic" },
    { name: "Embla", vibe: "Warm, expressive" },
    { name: "Kari", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Icelandic with a clear, steady tone. Keep it natural and calm."
  },

  starterPhrases: [
    { answer: "Hvernig hefurðu það?", expand: "Add how you're feeling." },
    { answer: "Ég hef það gott.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Geðveikt", meaning: "Awesome" },
    { term: "Allt í lagi", meaning: "Okay" },
    { term: "Frábært", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Icelandic has rolled R’s and clear vowels.",
    "Consonant clusters are common."
  ],

  culturalNotes: [
    "Speech is friendly and straightforward.",
    "Storytelling is a strong cultural tradition."
  ]
};
