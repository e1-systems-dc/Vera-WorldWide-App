export default {
  id: "tunisia",
  name: "Tunisia",
  dialects: [
    { id: "tn-derja", name: "Tunisian Arabic (Derja)" },
    { id: "tn-sfax", name: "Sfax Arabic" },
    { id: "tn-sahel", name: "Sousse/Sahel Arabic" },
    { id: "tn-djerba", name: "Djerba Amazigh" }
  ],

  speakingTutors: [
    { name: "Chaker", vibe: "Friendly, coastal vibe" },
    { name: "Anis", vibe: "Calm, patient" },
    { name: "Firas", vibe: "Youthful, upbeat" },
    { name: "Zied", vibe: "Modern, casual" },
    { name: "Bilel", vibe: "Relaxed, warm" },
    { name: "Skander", vibe: "Clear, structured" },
    { name: "Haythem", vibe: "Supportive, kind" },
    { name: "Nidhal", vibe: "Soft‑spoken" },
    { name: "Sofien", vibe: "Friendly, expressive" },

    { name: "Ons", vibe: "Warm, encouraging" },
    { name: "Nesma", vibe: "Youthful, modern" },
    { name: "Sana", vibe: "Calm, patient" },
    { name: "Marwa", vibe: "Friendly, upbeat" },
    { name: "Rahma", vibe: "Soft, supportive" },
    { name: "Sirine", vibe: "Expressive, fun" },
    { name: "Nermine", vibe: "Clear, structured" },
    { name: "Hanen", vibe: "Warm, kind" },
    { name: "Emna", vibe: "Modern, casual" }
  ],

  coachPrompts: {
    general:
      "We will practice Tunisian Derja with a smooth, Mediterranean tone. Keep it relaxed and natural."
  },

  starterPhrases: [
    { answer: "Chna7welik?", expand: "Add how you're feeling." },
    { answer: "Ana men Tunis.", expand: "Add a detail about your area." }
  ],

  slang: [
    { term: "Barsha", meaning: "A lot" },
    { term: "Behy", meaning: "Good" },
    { term: "Yezzi", meaning: "Stop / enough" }
  ],

  pronunciationNotes: [
    "Tunisian Arabic blends Arabic, French, and Italian influences.",
    "The 'q' often becomes a soft 'g' or disappears."
  ],

  culturalNotes: [
    "Coastal dialects are softer; inland dialects are sharper.",
    "Djerba has a strong Amazigh linguistic heritage."
  ]
};
