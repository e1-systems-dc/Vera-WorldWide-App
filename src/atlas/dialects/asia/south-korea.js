export default {
  id: "south-korea",
  name: "South Korea",
  dialects: [
    { id: "kr-seoul", name: "Seoul Korean" }
  ],

  speakingTutors: [
    { name: "Joon", vibe: "Calm, friendly" },
    { name: "Minho", vibe: "Relaxed, casual" },
    { name: "Hyun", vibe: "Steady, patient" },
    { name: "Soojin", vibe: "Soft, supportive" },
    { name: "Hana", vibe: "Warm, expressive" },
    { name: "Yeri", vibe: "Gentle, melodic" },
    { name: "Taeyang", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Korean with a warm, natural tone. Keep endings polite but relaxed."
  },

  starterPhrases: [
    { answer: "잘 지냈어요?", expand: "Add how you’ve been." },
    { answer: "잘 지냈어요.", expand: "Add one detail about your week." }
  ],

  slang: [
    { term: "대박", meaning: "Awesome / huge" },
    { term: "진짜", meaning: "Really / seriously" },
    { term: "괜찮아", meaning: "It’s okay / I’m fine" }
  ],

  pronunciationNotes: [
    "Endings change politeness; keep vowels soft and smooth.",
    "Seoul accent is the standard for media and education."
  ],

  culturalNotes: [
    "Honorifics show respect; they matter in everyday speech.",
    "Casual talk with friends drops some endings and particles."
  ]
};
