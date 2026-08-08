export default {
  id: "vietnam",
  name: "Vietnam",
  dialects: [
    { id: "vn-hanoi", name: "Northern Vietnamese (Hanoi)" },
    { id: "vn-saigon", name: "Southern Vietnamese (Saigon)" }
  ],

  speakingTutors: [
    { name: "Minh", vibe: "Calm, clear" },
    { name: "Quang", vibe: "Steady, patient" },
    { name: "Huy", vibe: "Relaxed, casual" },
    { name: "Lan", vibe: "Soft, supportive" },
    { name: "Trang", vibe: "Gentle, melodic" },
    { name: "Thao", vibe: "Warm, expressive" },
    { name: "An", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Vietnamese with a clear, gentle tone. Focus on tones but keep speech relaxed."
  },

  starterPhrases: [
    { answer: "Bạn khỏe không?", expand: "Add how you’re feeling." },
    { answer: "Tôi khỏe.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Dễ thương", meaning: "Cute / charming" },
    { term: "Ngon", meaning: "Tasty / great" },
    { term: "Ổn", meaning: "Okay / fine" }
  ],

  pronunciationNotes: [
    "Vietnamese is tonal; tone marks change meaning.",
    "Northern and Southern accents differ in tone and vowels."
  ],

  culturalNotes: [
    "Speech can be gentle but direct.",
    "Food and daily life often appear in casual talk."
  ]
};
