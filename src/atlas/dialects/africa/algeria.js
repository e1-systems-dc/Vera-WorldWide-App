export default {
  id: "algeria",
  name: "Algeria",
  dialects: [
    { id: "dz-darja", name: "Algerian Arabic (Darja)" },
    { id: "dz-kabyle", name: "Kabyle (Amazigh)" },
    { id: "dz-chaoui", name: "Chaoui (Aures Amazigh)" },
    { id: "dz-tlemcen", name: "Tlemcen Arabic" },
    { id: "dz-oran", name: "Oran Arabic (Wahrani)" }
  ],

  speakingTutors: [
    { name: "Yacine", vibe: "Friendly, upbeat, Oran energy" },
    { name: "Walid", vibe: "Calm, patient, clear pronunciation" },
    { name: "Sofiane", vibe: "Urban Algiers vibe, modern slang" },
    { name: "Mehdi", vibe: "Warm, encouraging, easygoing" },
    { name: "Nassim", vibe: "Energetic, fun, expressive" },
    { name: "Hakim", vibe: "Clear, structured, helpful" },
    { name: "Fares", vibe: "Relaxed, conversational" },
    { name: "Reda", vibe: "Youthful, modern, friendly" },
    { name: "Ismail", vibe: "Soft‑spoken, supportive" }
  ],

  coachPrompts: {
    general:
      "We will practice Algerian Darja with a warm, friendly tone. Keep responses natural and conversational."
  },

  starterPhrases: [
    { answer: "Labas? Kulshi mlih.", expand: "Try adding a detail about your day." },
    { answer: "Ana jay m’ Algiers.", expand: "Add why you came or where you're going." }
  ],

  slang: [
    { term: "Sah?", meaning: "Really?" },
    { term: "Zwin", meaning: "Nice / beautiful" },
    { term: "Haya", meaning: "Let's go" }
  ],

  pronunciationNotes: [
    "The 'q' often becomes a hard 'g' in many regions.",
    "Darja is fast and vowel‑light; syllables are clipped."
  ],

  culturalNotes: [
    "Algerians mix Arabic, French, and Amazigh depending on region.",
    "Oran dialect has a musical, rhythmic flow influenced by raï culture."
  ]
};
