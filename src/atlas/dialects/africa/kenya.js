export default {
  id: "kenya",
  name: "Kenya",
  dialects: [
    { id: "ke-swahili", name: "Swahili (Kenyan)" },
    { id: "ke-kikuyu", name: "Kikuyu" },
    { id: "ke-luo", name: "Luo" },
    { id: "ke-kalenjin", name: "Kalenjin" },
    { id: "ke-sheng", name: "Sheng (Urban Slang)" }
  ],

  speakingTutors: [
    { name: "Brian", vibe: "Warm, Nairobi energy" },
    { name: "Kelvin", vibe: "Friendly, upbeat" },
    { name: "Collins", vibe: "Calm, steady" },
    { name: "Achieng", vibe: "Soft, supportive" },
    { name: "Wanjiku", vibe: "Warm, motherly" },
    { name: "Mwende", vibe: "Gentle, melodic" },
    { name: "Otieno", vibe: "Luo clarity, expressive" },
    { name: "Cherono", vibe: "Kalenjin calmness" },
    { name: "Njeri", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Kenyan Swahili with a warm, friendly tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Sasa?", expand: "Add how you're doing." },
    { answer: "Niko poa.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Mambo", meaning: "What's up" },
    { term: "Poa", meaning: "Cool / good" },
    { term: "Niaje", meaning: "How are you" }
  ],

  pronunciationNotes: [
    "Kenyan Swahili is clearer and slower than Tanzanian Swahili.",
    "Sheng blends Swahili and English with fast rhythm."
  ],

  culturalNotes: [
    "Sheng is widely used among youth in Nairobi.",
    "Kenya is highly multilingual with strong ethnic identities."
  ]
};
