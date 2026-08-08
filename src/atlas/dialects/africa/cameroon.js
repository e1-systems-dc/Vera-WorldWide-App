export default {
  id: "cameroon",
  name: "Cameroon",
  dialects: [
    { id: "cm-fulfulde", name: "Fulfulde" },
    { id: "cm-ewondo", name: "Ewondo" },
    { id: "cm-duala", name: "Duala" },
    { id: "cm-pidgin", name: "Cameroonian Pidgin English" },
    { id: "cm-french", name: "Cameroonian French" }
  ],

  speakingTutors: [
    { name: "Blaise", vibe: "Warm, bilingual French-English energy" },
    { name: "Fabrice", vibe: "Calm, steady" },
    { name: "Tchana", vibe: "Friendly, upbeat" },
    { name: "Nadege", vibe: "Soft, supportive" },
    { name: "Brigitte", vibe: "Warm, expressive" },
    { name: "Mireille", vibe: "Gentle, melodic" },
    { name: "Ewane", vibe: "Duala clarity, patient" },
    { name: "Sorel", vibe: "Modern, friendly" },
    { name: "Ghislaine", vibe: "Calm, motherly" }
  ],

  coachPrompts: {
    general:
      "We will practice Cameroonian languages with a warm, bilingual tone. Keep it friendly and expressive."
  },

  starterPhrases: [
    { answer: "Comment ça va?", expand: "Add how you're feeling." },
    { answer: "I dey fine.", expand: "Add a detail about your day." }
  ],

  slang: [
    { term: "Chop", meaning: "Eat / food" },
    { term: "Tori", meaning: "Story / gossip" },
    { term: "Wahala", meaning: "Trouble" }
  ],

  pronunciationNotes: [
    "Cameroonian French has a rhythmic, melodic tone.",
    "Pidgin English is widely used in informal settings."
  ],

  culturalNotes: [
    "Cameroon is highly multilingual with strong regional identities.",
    "French and English influence varies by region."
  ]
};
