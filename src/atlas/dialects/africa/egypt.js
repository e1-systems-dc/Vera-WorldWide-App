export default {
  id: "egypt",
  name: "Egypt",
  dialects: [
    { id: "eg-masri", name: "Masri (Cairene Arabic)" },
    { id: "eg-saidi", name: "Sa’idi Arabic" },
    { id: "eg-alex", name: "Alexandrian Arabic" },
    { id: "eg-bedouin", name: "Bedouin Egyptian Arabic" }
  ],

  speakingTutors: [
    { name: "Omar", vibe: "Warm, classic Cairo friendliness" },
    { name: "Kareem", vibe: "Clear, patient, helpful" },
    { name: "Mostafa", vibe: "Energetic, expressive" },
    { name: "Sherif", vibe: "Professional, calm" },
    { name: "Hany", vibe: "Funny, lighthearted" },
    { name: "Tamer", vibe: "Relaxed, modern" },
    { name: "Aly", vibe: "Soft‑spoken, supportive" },
    { name: "Walid", vibe: "Friendly, easygoing" },
    { name: "Bassel", vibe: "Youthful, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Masri with a friendly, expressive Egyptian tone. Keep it warm and natural."
  },

  starterPhrases: [
    { answer: "Izayyak? Ana kwayyis.", expand: "Add a detail about how you're feeling." },
    { answer: "Ana min Masr.", expand: "Add your city or neighborhood." }
  ],

  slang: [
    { term: "Gamed", meaning: "Awesome" },
    { term: "Tamam", meaning: "Okay / good" },
    { term: "Yalla bina", meaning: "Let's go" }
  ],

  pronunciationNotes: [
    "The 'j' becomes a hard 'g' (e.g., 'gamal' instead of 'jamal').",
    "Masri has a musical, rising‑falling intonation."
  ],

  culturalNotes: [
    "Egyptian Arabic is widely understood across the Arab world due to media influence.",
    "Cairene speech is expressive and warm."
  ]
};
