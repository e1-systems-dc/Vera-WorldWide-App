export default {
  id: "taiwan",
  name: "Taiwan",
  dialects: [
    { id: "tw-mandarin", name: "Taiwan Mandarin" },
    { id: "tw-hokkien", name: "Taiwanese Hokkien" }
  ],

  speakingTutors: [
    { name: "Wei Ting", vibe: "Warm, gentle" },
    { name: "Yu Chen", vibe: "Calm, friendly" },
    { name: "Zi Hao", vibe: "Relaxed, casual" },
    { name: "Pei Lin", vibe: "Soft, supportive" },
    { name: "Jia Hui", vibe: "Melodic, kind" },
    { name: "An Qi", vibe: "Modern, upbeat" },
    { name: "Han Yu", vibe: "Structured, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Taiwan Mandarin with a soft, friendly tone. Keep it relaxed and natural."
  },

  starterPhrases: [
    { answer: "最近好吗？", expand: "Add how things have been." },
    { answer: "还不错。", expand: "Add one small detail about your day." }
  ],

  slang: [
    { term: "超棒", meaning: "Super great" },
    { term: "有点累", meaning: "A bit tired" },
    { term: "不错啦", meaning: "Pretty good / not bad" }
  ],

  pronunciationNotes: [
    "Taiwan Mandarin has softer tones and gentle rhythm.",
    "Hokkien adds local flavor and identity to speech."
  ],

  culturalNotes: [
    "Casual speech mixes Mandarin with local phrases.",
    "Tone is often warm, polite, and easygoing."
  ]
};
