export default {
  id: "myanmar",
  name: "Myanmar",
  dialects: [
    { id: "mm-burmese", name: "Burmese" }
  ],

  speakingTutors: [
    { name: "Ko Aung", vibe: "Calm, friendly" },
    { name: "Min Tun", vibe: "Relaxed, casual" },
    { name: "Thura", vibe: "Steady, patient" },
    { name: "Hnin", vibe: "Soft, supportive" },
    { name: "Su", vibe: "Gentle, melodic" },
    { name: "Thiri", vibe: "Warm, expressive" },
    { name: "Nyein", vibe: "Modern, upbeat" }
  ],

  coachPrompts: {
    general:
      "We will practice Burmese with a warm, gentle tone. Keep it natural and calm."
  },

  starterPhrases: [
    { answer: "နေကောင်းလား?", expand: "Add how you’re feeling." },
    { answer: "နေကောင်းပါတယ်။", expand: "Add one detail about your day." }
  ],

  slang: [
    { term: "ကောင်းတယ်", meaning: "Good" },
    { term: "အိုကေ", meaning: "Okay" },
    { term: "စိတ်ချမ်းသာ", meaning: "Feeling peaceful" }
  ],

  pronunciationNotes: [
    "Burmese has flowing rhythm and soft consonants.",
    "Tone and length affect meaning."
  ],

  culturalNotes: [
    "Speech is often gentle and respectful.",
    "Honorifics and polite particles matter."
  ]
};
