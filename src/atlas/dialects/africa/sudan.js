export default {
  id: "sudan",
  name: "Sudan",
  dialects: [
    { id: "sd-arabic", name: "Sudanese Arabic" },
    { id: "sd-juba", name: "Juba Arabic" },
    { id: "sd-beja", name: "Beja (Bedawi)" },
    { id: "sd-nubian", name: "Nubian (Nobiin)" }
  ],

  speakingTutors: [
    { name: "Mazin", vibe: "Warm, gentle, Sudanese hospitality" },
    { name: "Othman", vibe: "Calm, steady" },
    { name: "Bakri", vibe: "Friendly, upbeat" },
    { name: "Mutaz", vibe: "Youthful, energetic" },
    { name: "Haitham", vibe: "Clear, structured" },
    { name: "Mohab", vibe: "Soft‑spoken, kind" },
    { name: "Siddig", vibe: "Traditional, warm" },
    { name: "Ammar", vibe: "Relaxed, casual" },
    { name: "Taha", vibe: "Supportive, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Sudanese Arabic with a warm, gentle tone. Keep it slow and friendly."
  },

  starterPhrases: [
    { answer: "Keifak?", expand: "Add how you're feeling." },
    { answer: "Ana min Khartoum.", expand: "Add a detail about your neighborhood." }
  ],

  slang: [
    { term: "Zol", meaning: "Person / guy" },
    { term: "Aiwa", meaning: "Yes" },
    { term: "Shinu?", meaning: "What?" }
  ],

  pronunciationNotes: [
    "Sudanese Arabic is slower and softer than many dialects.",
    "Vowels are longer and more melodic."
  ],

  culturalNotes: [
    "Sudanese speech is known for warmth and politeness.",
    "Nubian and Beja influence is strong in the north and east."
  ]
};
