export default {
  id: "mongolia",
  name: "Mongolia",
  dialects: [
    { id: "mn-khalkha", name: "Khalkha Mongolian" }
  ],

  speakingTutors: [
    { name: "Bat-Erdene", vibe: "Calm, steady" },
    { name: "Temuulen", vibe: "Warm, friendly" },
    { name: "Altan", vibe: "Relaxed, casual" },
    { name: "Sarangerel", vibe: "Soft, supportive" },
    { name: "Nomin", vibe: "Gentle, melodic" },
    { name: "Enkhbayar", vibe: "Structured, patient" },
    { name: "Anu", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Mongolian with a calm, grounded tone. Keep it natural and steady."
  },

  starterPhrases: [
    { answer: "Сайн байна уу?", expand: "Add how you feel today." },
    { answer: "Би сайн байна.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Гоё", meaning: "Nice / cool" },
    { term: "Зүгээр", meaning: "Okay / fine" },
    { term: "Чадна", meaning: "I can / it’s possible" }
  ],

  pronunciationNotes: [
    "Mongolian has clear vowels and strong consonants.",
    "Rhythm is steady and slightly slower than English."
  ],

  culturalNotes: [
    "Speech can feel calm and direct.",
    "Respectful forms are used with elders and strangers."
  ]
};
