export default {
  id: "syria",
  name: "Syria",
  dialects: [
    { id: "sy-levantine", name: "Syrian Levantine Arabic" }
  ],

  speakingTutors: [
    { name: "Tarek", vibe: "Warm, classic Levantine tone" },
    { name: "Rami", vibe: "Calm, steady" },
    { name: "Jad", vibe: "Relaxed, friendly" },
    { name: "Maya", vibe: "Soft, supportive" },
    { name: "Rima", vibe: "Warm, expressive" },
    { name: "Leen", vibe: "Gentle, melodic" },
    { name: "Nour", vibe: "Clear, structured" },
    { name: "Samer", vibe: "Calm, patient" },
    { name: "Dana", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Syrian Levantine Arabic with a warm, melodic tone. Keep it friendly and expressive."
  },

  starterPhrases: [
    { answer: "Keefak?", expand: "Add how you're doing." },
    { answer: "Mnih, shukran.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yalla", meaning: "Let's go" },
    { term: "Sho fi ma fi", meaning: "What's going on" },
    { term: "Tayyeb", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Syrian Arabic is soft and melodic.",
    "The 'q' often becomes a glottal stop."
  ],

  culturalNotes: [
    "Syrian Arabic is widely understood across the Levant.",
    "Speech is warm, expressive, and rhythmic."
  ]
};
