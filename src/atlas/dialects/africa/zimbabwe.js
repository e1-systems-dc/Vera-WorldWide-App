export default {
  id: "zimbabwe",
  name: "Zimbabwe",
  dialects: [
    { id: "zw-shona", name: "Shona" },
    { id: "zw-ndebele", name: "Ndebele" },
    { id: "zw-english", name: "Zimbabwean English" }
  ],

  speakingTutors: [
    { name: "Tendai", vibe: "Warm, friendly" },
    { name: "Kuda", vibe: "Calm, steady" },
    { name: "Farai", vibe: "Relaxed, casual" },
    { name: "Rudo", vibe: "Soft, supportive" },
    { name: "Nyasha", vibe: "Warm, expressive" },
    { name: "Chipo", vibe: "Gentle, melodic" },
    { name: "Tafadzwa", vibe: "Clear, structured" },
    { name: "Rutendo", vibe: "Calm, patient" },
    { name: "Shingai", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Shona with a warm, melodic tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Wakadini zvako?", expand: "Add how you're feeling." },
    { answer: "Ndiripo.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Zvirisei", meaning: "What's up" },
    { term: "Ndozvazviri", meaning: "It is what it is" },
    { term: "Sharp", meaning: "Okay / good" }
  ],

  pronunciationNotes: [
    "Shona is tonal with smooth vowels.",
    "Ndebele is related to Zulu with similar clicks."
  ],

  culturalNotes: [
    "Shona is the most widely spoken language in Zimbabwe.",
    "Speech is warm and rhythmic."
  ]
};
