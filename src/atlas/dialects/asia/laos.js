export default {
  id: "laos",
  name: "Laos",
  dialects: [
    { id: "la-lao", name: "Lao" }
  ],

  speakingTutors: [
    { name: "Somchai", vibe: "Calm, friendly" },
    { name: "Kham", vibe: "Relaxed, casual" },
    { name: "Vong", vibe: "Steady, patient" },
    { name: "Noy", vibe: "Soft, supportive" },
    { name: "Mai", vibe: "Gentle, melodic" },
    { name: "Thong", vibe: "Warm, expressive" },
    { name: "Anong", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Lao with a soft, relaxed tone. Keep it natural and gentle."
  },

  starterPhrases: [
    { answer: "ສະບາຍດີບໍ?", expand: "Add how you’re feeling." },
    { answer: "ສະບາຍດີ.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "ดีหลาย", meaning: "Very good" },
    { term: "ชิลๆ", meaning: "Chill / relaxed (borrowed)" },
    { term: "โอเค", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Lao is tonal and close to Thai in rhythm.",
    "Speech is often soft and flowing."
  ],

  culturalNotes: [
    "Conversation is gentle and polite.",
    "Smiles and soft tone carry a lot of meaning."
  ]
};
