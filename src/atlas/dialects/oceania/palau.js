export default {
  id: "palau",
  name: "Palau",
  dialects: [
    { id: "pw-palauan", name: "Palauan" },
    { id: "pw-english", name: "Palau English" }
  ],

  speakingTutors: [
    { name: "Taro", vibe: "Warm, friendly" },
    { name: "Kimo", vibe: "Relaxed, casual" },
    { name: "Lio", vibe: "Calm, steady" },
    { name: "Alofa", vibe: "Soft, supportive" },
    { name: "Mele", vibe: "Gentle, melodic" },
    { name: "Lani", vibe: "Warm, expressive" },
    { name: "Sina", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Palauan with a warm, gentle tone. Keep it natural and expressive."
  },

  starterPhrases: [
    { answer: "Alii", expand: "Add how you're feeling." },
    { answer: "Ochoi.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Alii", meaning: "Hello" },
    { term: "Ochoi", meaning: "Good" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Palauan has unique consonant clusters and open vowels.",
    "Speech is gentle and melodic."
  ],

  culturalNotes: [
    "Speech is warm and respectful.",
    "Community values shape conversation."
  ]
};
