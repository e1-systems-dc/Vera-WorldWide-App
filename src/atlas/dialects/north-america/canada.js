export default {
  id: "canada",
  name: "Canada",
  dialects: [
    { id: "ca-english", name: "Canadian English" },
    { id: "ca-french", name: "Canadian French" }
  ],

  speakingTutors: [
    { name: "Liam", vibe: "Warm, friendly" },
    { name: "Noah", vibe: "Relaxed, casual" },
    { name: "Evan", vibe: "Calm, steady" },
    { name: "Amelia", vibe: "Soft, supportive" },
    { name: "Sophie", vibe: "Gentle, melodic" },
    { name: "Chloé", vibe: "Warm, expressive" },
    { name: "Aiden", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Canadian English and French with a warm, polite tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "How are you doing, eh?", expand: "Add how you're feeling." },
    { answer: "Ça va bien.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Eh", meaning: "Soft question tag" },
    { term: "Toque", meaning: "Winter hat" },
    { term: "Double-double", meaning: "Coffee with two cream, two sugar" }
  ],

  pronunciationNotes: [
    "Canadian English has slight vowel shifts.",
    "Canadian French is clearer and less nasal than Parisian French."
  ],

  culturalNotes: [
    "Speech is polite and friendly.",
    "Bilingualism is common in many regions."
  ]
};
