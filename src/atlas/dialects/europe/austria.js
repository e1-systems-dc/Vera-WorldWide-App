export default {
  id: "austria",
  name: "Austria",
  dialects: [
    { id: "at-austrian", name: "Austrian German" }
  ],

  speakingTutors: [
    { name: "Lukas", vibe: "Warm, friendly" },
    { name: "Fabian", vibe: "Relaxed, casual" },
    { name: "Tobias", vibe: "Calm, steady" },
    { name: "Anna", vibe: "Soft, supportive" },
    { name: "Marie", vibe: "Gentle, melodic" },
    { name: "Sophie", vibe: "Warm, expressive" },
    { name: "Nico", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Austrian German with a warm, melodic tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Wie geht’s dir?", expand: "Add how you're feeling." },
    { answer: "Gut.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Leiwand", meaning: "Awesome" },
    { term: "Passt", meaning: "Okay / works" },
    { term: "Oida", meaning: "Dude / bro (friendly)" }
  ],

  pronunciationNotes: [
    "Austrian German is softer and more melodic than Standard German.",
    "Vowels are rounded and smooth."
  ],

  culturalNotes: [
    "Speech is warm and polite.",
    "Regional expressions add charm."
  ]
};
