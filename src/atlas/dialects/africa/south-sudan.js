export default {
  id: "south-sudan",
  name: "South Sudan",
  dialects: [
    { id: "ss-juba-arabic", name: "Juba Arabic" },
    { id: "ss-dinka", name: "Dinka" },
    { id: "ss-nuer", name: "Nuer" },
    { id: "ss-shilluk", name: "Shilluk" }
  ],

  speakingTutors: [
    { name: "Bol", vibe: "Calm, deep-voiced, steady" },
    { name: "Deng", vibe: "Warm, friendly" },
    { name: "Gatluak", vibe: "Relaxed, casual" },
    { name: "Nyamal", vibe: "Soft, supportive" },
    { name: "Abuk", vibe: "Warm, motherly" },
    { name: "Nyandeng", vibe: "Gentle, melodic" },
    { name: "Thon", vibe: "Clear, structured" },
    { name: "Gatwech", vibe: "Calm, patient" },
    { name: "Ayor", vibe: "Modern, friendly" }
  ],

  coachPrompts: {
    general:
      "We will practice Juba Arabic with a warm, steady tone. Keep responses simple, friendly, and natural."
  },

  starterPhrases: [
    { answer: "Keif inta?", expand: "Add how you're doing." },
    { answer: "Ana tamam.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Wad", meaning: "Boy / guy" },
    { term: "Bint", meaning: "Girl" },
    { term: "Zein", meaning: "Good" }
  ],

  pronunciationNotes: [
    "Juba Arabic is simpler than Sudanese Arabic.",
    "Dinka and Nuer are tonal with long vowels."
  ],

  culturalNotes: [
    "South Sudan has strong ethnic-linguistic diversity.",
    "Juba Arabic is widely used in cities."
  ]
};
