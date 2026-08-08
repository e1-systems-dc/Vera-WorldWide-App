export default {
  id: "jordan",
  name: "Jordan",
  dialects: [
    { id: "jo-levantine", name: "Jordanian Levantine Arabic" },
    { id: "jo-bedouin", name: "Jordanian Bedouin Arabic" }
  ],

  speakingTutors: [
    { name: "Omar", vibe: "Warm, friendly" },
    { name: "Yazan", vibe: "Calm, steady" },
    { name: "Laith", vibe: "Relaxed, casual" },
    { name: "Lina", vibe: "Soft, supportive" },
    { name: "Nour", vibe: "Warm, expressive" },
    { name: "Razan", vibe: "Gentle, melodic" },
    { name: "Ahmad", vibe: "Clear, structured" },
    { name: "Alaa", vibe: "Calm, patient" },
    { name: "Rami", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Jordanian Arabic with a warm, clear tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Keef halak?", expand: "Add how you're feeling." },
    { answer: "Mnih.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Yalla", meaning: "Let's go" },
    { term: "Sah?", meaning: "Really?" },
    { term: "Tayyeb", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Jordanian Arabic is close to Palestinian and Syrian dialects.",
    "Bedouin dialects preserve older Arabic sounds."
  ],

  culturalNotes: [
    "Jordanian speech is polite and warm.",
    "Amman dialect is widely understood."
  ]
};
