export default {
  id: "iraq",
  name: "Iraq",
  dialects: [
    { id: "iq-baghdadi", name: "Baghdadi Arabic" },
    { id: "iq-mosuli", name: "Mosuli Arabic" },
    { id: "iq-southern", name: "Southern Iraqi Arabic" }
  ],

  speakingTutors: [
    { name: "Zaid", vibe: "Warm, modern Baghdad tone" },
    { name: "Mustafa", vibe: "Calm, steady" },
    { name: "Omar", vibe: "Relaxed, friendly" },
    { name: "Noor", vibe: "Soft, supportive" },
    { name: "Zainab", vibe: "Warm, expressive" },
    { name: "Rana", vibe: "Gentle, melodic" },
    { name: "Ali", vibe: "Clear, structured" },
    { name: "Hiba", vibe: "Calm, patient" },
    { name: "Yasir", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Iraqi Arabic with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Shlonak?", expand: "Add how you're feeling." },
    { answer: "Zain, shukran.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sho", meaning: "What" },
    { term: "Hala", meaning: "Hi" },
    { term: "Ala rasi", meaning: "With pleasure" }
  ],

  pronunciationNotes: [
    "Iraqi Arabic uses a soft 'ch' sound in some regions.",
    "Baghdadi Arabic is smoother than southern dialects."
  ],

  culturalNotes: [
    "Iraq has strong regional dialect differences.",
    "Baghdad speech is widely understood across the country."
  ]
};
