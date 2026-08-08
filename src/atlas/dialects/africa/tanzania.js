export default {
  id: "tanzania",
  name: "Tanzania",
  dialects: [
    { id: "tz-swahili", name: "Swahili (Tanzanian)" },
    { id: "tz-chaga", name: "Chaga" },
    { id: "tz-haya", name: "Haya" },
    { id: "tz-nyamwezi", name: "Nyamwezi" }
  ],

  speakingTutors: [
    { name: "Juma", vibe: "Warm, classic Swahili tone" },
    { name: "Baraka", vibe: "Calm, steady" },
    { name: "Hassan", vibe: "Relaxed, friendly" },
    { name: "Asha", vibe: "Soft, supportive" },
    { name: "Zainabu", vibe: "Warm, motherly" },
    { name: "Neema", vibe: "Gentle, melodic" },
    { name: "Musa", vibe: "Clear, structured" },
    { name: "Rehema", vibe: "Calm, patient" },
    { name: "Salma", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Tanzanian Swahili with a smooth, melodic tone. Keep it warm and natural."
  },

  starterPhrases: [
    { answer: "Habari gani?", expand: "Add how you're doing." },
    { answer: "Nzuri sana.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Mambo vipi", meaning: "How's it going" },
    { term: "Freshi", meaning: "Good / cool" },
    { term: "Bomba", meaning: "Great" }
  ],

  pronunciationNotes: [
    "Tanzanian Swahili is considered the standard form.",
    "Speech is slower and more melodic than Kenyan Swahili."
  ],

  culturalNotes: [
    "Swahili originated along the Tanzanian coast.",
    "Speech is warm, polite, and rhythmic."
  ]
};
