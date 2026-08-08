export default {
  id: "china",
  name: "China",
  dialects: [
    { id: "cn-mandarin", name: "Mandarin (Putonghua)" },
    { id: "cn-cantonese", name: "Cantonese" },
    { id: "cn-shanghai", name: "Shanghainese" }
  ],

  speakingTutors: [
    { name: "Li Wei", vibe: "Calm, clear Mandarin" },
    { name: "Chen Yu", vibe: "Warm, friendly" },
    { name: "Xiao Ming", vibe: "Relaxed, casual" },
    { name: "Mei Lin", vibe: "Soft, supportive" },
    { name: "Jia Li", vibe: "Gentle, melodic" },
    { name: "Hao Ran", vibe: "Structured, patient" },
    { name: "Yan Yan", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Mandarin with a clear, calm tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "你好吗？", expand: "Add how you feel today." },
    { answer: "我很好。", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "加油", meaning: "Keep it up / you got this" },
    { term: "不错", meaning: "Not bad / pretty good" },
    { term: "可以", meaning: "Okay / works" }
  ],

  pronunciationNotes: [
    "Mandarin is tonal; keep tones steady and clear.",
    "Cantonese has more tones and uses sentence particles."
  ],

  culturalNotes: [
    "Everyday Mandarin is often concise and direct.",
    "Regional dialects carry strong local identity and warmth."
  ]
};
