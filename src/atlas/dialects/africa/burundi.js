export default {
  id: "burundi",
  name: "Burundi",
  dialects: [
    { id: "bi-kirundi", name: "Kirundi" },
    { id: "bi-french", name: "Burundian French" }
  ],

  speakingTutors: [
    { name: "Emmanuel", vibe: "Warm, friendly" },
    { name: "Didier", vibe: "Calm, steady" },
    { name: "Pascal", vibe: "Relaxed, casual" },
    { name: "Ariane", vibe: "Soft, supportive" },
    { name: "Clarisse", vibe: "Warm, expressive" },
    { name: "Mireille", vibe: "Gentle, melodic" },
    { name: "Gervais", vibe: "Clear, structured" },
    { name: "Nadine", vibe: "Calm, patient" },
    { name: "Odette", vibe: "Motherly, warm" }
  ],

  coachPrompts: {
    general:
      "We will practice Kirundi with a warm, steady tone. Keep it friendly and natural."
  },

  starterPhrases: [
    { answer: "Amakuru?", expand: "Add how you're doing." },
    { answer: "Ni meza cane.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Sha", meaning: "Friend" },
    { term: "Nivyiza", meaning: "It's good" },
    { term: "Ego", meaning: "Yes" }
  ],

  pronunciationNotes: [
    "Kirundi is smooth and similar to Kinyarwanda.",
    "Speech is calm and melodic."
  ],

  culturalNotes: [
    "Kirundi is spoken nationwide.",
    "Speech is polite and warm."
  ]
};
