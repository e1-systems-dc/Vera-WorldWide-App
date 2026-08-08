export default {
  id: "north-korea",
  name: "North Korea",
  dialects: [
    { id: "kp-pyongyang", name: "Pyongyang Korean" }
  ],

  speakingTutors: [
    { name: "Jin", vibe: "Calm, clear" },
    { name: "Hyeon", vibe: "Steady, patient" },
    { name: "Min", vibe: "Warm, friendly" },
    { name: "Soo", vibe: "Soft, supportive" },
    { name: "Ara", vibe: "Gentle, melodic" },
    { name: "Yun", vibe: "Structured, calm" },
    { name: "Hana", vibe: "Modern, kind" }
  ],

  coachPrompts: {
    general:
      "We will practice Korean with a neutral, clear tone. Focus on simple, natural sentences."
  },

  starterPhrases: [
    { answer: "안녕하세요?", expand: "Add how you’re feeling." },
    { answer: "괜찮아요.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "좋아요", meaning: "Good / I like it" },
    { term: "괜찮아요", meaning: "It’s okay / I’m fine" },
    { term: "고마워요", meaning: "Thank you" }
  ],

  pronunciationNotes: [
    "Standard Korean rhythm applies; keep vowels clear.",
    "Differences are mostly lexical and stylistic."
  ],

  culturalNotes: [
    "We focus purely on language, not politics.",
    "Polite forms are used as the default register."
  ]
};
