export default {
  id: "libya",
  name: "Libya",
  dialects: [
    { id: "ly-tripoli", name: "Tripoli Arabic" },
    { id: "ly-benghazi", name: "Benghazi Arabic" },
    { id: "ly-south", name: "Southern Libyan Arabic" },
    { id: "ly-nafusi", name: "Libyan Amazigh (Nafusi)" }
  ],

  speakingTutors: [
    { name: "Muftah", vibe: "Calm, desert‑soft tone" },
    { name: "Fathi", vibe: "Friendly, warm" },
    { name: "Salah", vibe: "Clear, structured" },
    { name: "Marwan", vibe: "Modern, upbeat" },
    { name: "Belal", vibe: "Relaxed, casual" },
    { name: "Anas", vibe: "Youthful, energetic" },
    { name: "Khaled", vibe: "Professional, steady" },
    { name: "Ayman", vibe: "Supportive, patient" },
    { name: "Jalal", vibe: "Soft‑spoken, kind" }
  ],

  coachPrompts: {
    general:
      "We will practice Libyan Arabic with a calm, friendly tone. Keep responses simple and natural."
  },

  starterPhrases: [
    { answer: "Shlonak?", expand: "Add how your day is going." },
    { answer: "Ana min Tripoli.", expand: "Add a detail about your neighborhood." }
  ],

  slang: [
    { term: "Hek", meaning: "Like this" },
    { term: "Barsha", meaning: "A lot" },
    { term: "Zain", meaning: "Good" }
  ],

  pronunciationNotes: [
    "Libyan Arabic blends Bedouin and Mediterranean sounds.",
    "The 'q' often stays a deep 'g' sound."
  ],

  culturalNotes: [
    "Tripoli speech is smoother; Benghazi is sharper and faster.",
    "Amazigh influence is strong in western regions."
  ]
};
