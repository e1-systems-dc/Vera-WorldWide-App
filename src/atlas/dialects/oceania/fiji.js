export default {
  id: "fiji",
  name: "Fiji",
  dialects: [
    { id: "fj-fijian", name: "Fijian" },
    { id: "fj-hindi", name: "Fiji Hindi" },
    { id: "fj-english", name: "Fijian English" }
  ],

  speakingTutors: [
    { name: "Jone", vibe: "Warm, friendly" },
    { name: "Manoa", vibe: "Relaxed, casual" },
    { name: "Samu", vibe: "Calm, steady" },
    { name: "Litia", vibe: "Soft, supportive" },
    { name: "Mere", vibe: "Gentle, melodic" },
    { name: "Ana", vibe: "Warm, expressive" },
    { name: "Ratu", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Fijian, Fiji Hindi, and English with a warm, melodic tone. Keep it natural and friendly."
  },

  starterPhrases: [
    { answer: "Bula!", expand: "Add how you're feeling." },
    { answer: "Au bulabula vinaka.", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "Bula", meaning: "Hello" },
    { term: "Vinaka", meaning: "Thank you / good" },
    { term: "Ok", meaning: "Okay" }
  ],

  pronunciationNotes: [
    "Fijian has open vowels and rhythmic flow.",
    "Speech is melodic and warm."
  ],

  culturalNotes: [
    "Speech is friendly and welcoming.",
    "Hospitality is central to conversation."
  ]
};
