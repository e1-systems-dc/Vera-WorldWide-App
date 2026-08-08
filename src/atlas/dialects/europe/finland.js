export default {
  id: "finland",
  name: "Finland",
  dialects: [
    { id: "fi-finnish", name: "Finnish" },
    { id: "fi-swedish", name: "Finland Swedish" }
  ],

  speakingTutors: [
    { name: "Aaro", vibe: "Calm, steady" },
    { name: "Eero", vibe: "Relaxed, casual" },
    { name: "Mika", vibe: "Warm, friendly" },
    { name: "Aino", vibe: "Soft, supportive" },
    { name: "Helmi", vibe: "Gentle, melodic" },
    { name: "Lumi", vibe: "Warm, expressive" },
    { name: "Oskari", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Finnish with a calm, clear tone. Keep it steady and natural."
  },

  starterPhrases: [
    { answer: "Mitä kuuluu?", expand: "Add how you're feeling." },
    { answer: "Hyvää.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Siistiä", meaning: "Cool" },
    { term: "Ihan ok", meaning: "Pretty okay" },
    { term: "Jes", meaning: "Yes / great" }
  ],

  pronunciationNotes: [
    "Finnish has long and short vowels that change meaning.",
    "Rhythm is steady and even."
  ],

  culturalNotes: [
    "Speech is calm and thoughtful.",
    "Silence is comfortable in Finnish culture."
  ]
};
