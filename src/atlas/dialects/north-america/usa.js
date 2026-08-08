export default {
  id: "usa",
  name: "United States",
  dialects: [
    { id: "us-general", name: "General American English" },
    { id: "us-southern", name: "Southern American English" },
    { id: "us-northeast", name: "Northeastern English" },
    { id: "us-west", name: "Western American English" },
    { id: "us-midwest", name: "Midwestern English" },
    { id: "us-aave", name: "African American Vernacular English (AAVE)" }
  ],

  speakingTutors: [
    { name: "Ethan", vibe: "Warm, friendly" },
    { name: "Caleb", vibe: "Relaxed, casual" },
    { name: "Mason", vibe: "Calm, steady" },
    { name: "Ava", vibe: "Soft, supportive" },
    { name: "Chloe", vibe: "Gentle, melodic" },
    { name: "Zoe", vibe: "Warm, expressive" },
    { name: "Jayden", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice American English with a warm, natural tone. Keep it friendly and clear."
  },

  starterPhrases: [
    { answer: "How’s it going", expand: "Add how you're feeling." },
    { answer: "I’m good", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Cool", meaning: "Nice" },
    { term: "Chill", meaning: "Relaxed" },
    { term: "Bet", meaning: "Okay / sounds good" }
  ],

  pronunciationNotes: [
    "General American uses rhotic R’s.",
    "Regional accents vary widely but remain mutually intelligible."
  ],

  culturalNotes: [
    "Speech is friendly and casual.",
    "Small talk is common in daily interactions."
  ]
};
