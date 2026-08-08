export default {
  id: "nigeria",
  name: "Nigeria",
  dialects: [
    { id: "ng-yoruba", name: "Yoruba" },
    { id: "ng-igbo", name: "Igbo" },
    { id: "ng-hausa", name: "Hausa" },
    { id: "ng-nigerian-pidgin", name: "Nigerian Pidgin" }
  ],

  speakingTutors: [
    { name: "Tunde", vibe: "Warm, Yoruba energy" },
    { name: "Kunle", vibe: "Friendly, upbeat" },
    { name: "Segun", vibe: "Calm, patient" },
    { name: "Chinedu", vibe: "Igbo clarity, supportive" },
    { name: "Obinna", vibe: "Youthful, energetic" },
    { name: "Ngozi", vibe: "Warm, motherly tone" },
    { name: "Amaka", vibe: "Friendly, expressive" },
    { name: "Zainab", vibe: "Hausa softness, gentle" },
    { name: "Hajara", vibe: "Calm, steady" }
  ],

  coachPrompts: {
    general:
      "We will practice Nigerian languages with a friendly, expressive tone. Keep it natural and lively."
  },

  starterPhrases: [
    { answer: "How far?", expand: "Add how you're doing." },
    { answer: "I dey okay.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Wahala", meaning: "Trouble / problem" },
    { term: "Abeg", meaning: "Please" },
    { term: "Oya", meaning: "Let's go / hurry" }
  ],

  pronunciationNotes: [
    "Pidgin is tonal but simpler than Yoruba or Igbo.",
    "Yoruba has three tones; Igbo has two."
  ],

  culturalNotes: [
    "Nigeria is linguistically diverse; Pidgin is widely understood.",
    "Tone is essential in Yoruba and Igbo."
  ]
};
