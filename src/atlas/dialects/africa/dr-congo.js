export default {
  id: "dr-congo",
  name: "DR Congo",
  dialects: [
    { id: "cd-lingala", name: "Lingala" },
    { id: "cd-swahili", name: "Congo Swahili" },
    { id: "cd-tshiluba", name: "Tshiluba" },
    { id: "cd-kikongo", name: "Kikongo" },
    { id: "cd-french", name: "Congolese French" }
  ],

  speakingTutors: [
    { name: "Gloire", vibe: "Warm, expressive Lingala tone" },
    { name: "Junior", vibe: "Youthful, upbeat" },
    { name: "Blaise", vibe: "Calm, steady" },
    { name: "Prisca", vibe: "Soft, supportive" },
    { name: "Chantal", vibe: "Warm, motherly" },
    { name: "Mado", vibe: "Friendly, melodic" },
    { name: "Heritier", vibe: "Modern, friendly" },
    { name: "Dorcelle", vibe: "Gentle, patient" },
    { name: "Fiston", vibe: "Relaxed, casual" }
  ],

  coachPrompts: {
    general:
      "We will practice Lingala with a rhythmic, musical tone. Keep it expressive and warm."
  },

  starterPhrases: [
    { answer: "Mbote!", expand: "Add how you're doing." },
    { answer: "Nazali malamu.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Likambu", meaning: "Thing / issue" },
    { term: "Sango", meaning: "News" },
    { term: "Moto", meaning: "Person" }
  ],

  pronunciationNotes: [
    "Lingala is smooth and melodic with open vowels.",
    "Congolese French has a musical rhythm."
  ],

  culturalNotes: [
    "Lingala is widely used in music and urban culture.",
    "DRC is one of the most linguistically diverse countries in Africa."
  ]
};
