export default {
  id: "kazakhstan",
  name: "Kazakhstan",
  dialects: [
    { id: "kz-kazakh", name: "Kazakh" },
    { id: "kz-russian", name: "Kazakhstani Russian" }
  ],

  speakingTutors: [
    { name: "Ayan", vibe: "Warm, modern Kazakh tone" },
    { name: "Dias", vibe: "Calm, steady" },
    { name: "Yerlan", vibe: "Relaxed, friendly" },
    { name: "Madina", vibe: "Soft, supportive" },
    { name: "Aruzhan", vibe: "Gentle, melodic" },
    { name: "Alina", vibe: "Warm, expressive" },
    { name: "Arman", vibe: "Modern, upbeat" },
    { name: "Leyla", vibe: "Clear, friendly" },
    { name: "Daniyar", vibe: "Calm, patient" }
  ],

  coachPrompts: {
    general:
      "We will practice Kazakh with a warm, modern tone. Keep responses smooth, friendly, and natural."
  },

  starterPhrases: [
    { answer: "Qalai?", expand: "Add how you're doing." },
    { answer: "Jaqsy.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Krasavchik", meaning: "Nice one / good job" },
    { term: "Norm", meaning: "Okay / fine" },
    { term: "Bro", meaning: "Friend" }
  ],

  pronunciationNotes: [
    "Kazakh uses vowel harmony.",
    "Kazakhstani Russian has softer consonants than Moscow Russian."
  ],

  culturalNotes: [
    "Kazakhstan blends Turkic, Russian, and Central Asian influences.",
    "Speech is calm, warm, and polite."
  ]
};
