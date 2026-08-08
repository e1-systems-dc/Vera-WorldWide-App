export default {
  id: "ireland",
  name: "Ireland",
  dialects: [
    { id: "ie-english", name: "Irish English" },
    { id: "ie-irish", name: "Irish (Gaeilge)" }
  ],

  speakingTutors: [
    { name: "Liam", vibe: "Warm, friendly" },
    { name: "Sean", vibe: "Relaxed, casual" },
    { name: "Cian", vibe: "Steady, patient" },
    { name: "Aoife", vibe: "Soft, supportive" },
    { name: "Niamh", vibe: "Warm, expressive" },
    { name: "Saoirse", vibe: "Gentle, melodic" },
    { name: "Ronan", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Irish English with a warm, expressive tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "How are you keeping?", expand: "Add how you're feeling." },
    { answer: "I'm grand.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Grand", meaning: "Good / fine" },
    { term: "Deadly", meaning: "Awesome" },
    { term: "Sound", meaning: "Nice / kind" }
  ],

  pronunciationNotes: [
    "Irish English has melodic intonation.",
    "Irish (Gaeilge) has broad and slender consonants."
  ],

  culturalNotes: [
    "Speech is warm and expressive.",
    "Humor and friendliness are common in conversation."
  ]
};
