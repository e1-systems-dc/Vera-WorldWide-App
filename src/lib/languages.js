export const LANGUAGES = [
  {
    id: "arabic",
    name: "Arabic",
    flag: "🌍",
    writingSystem: "Arabic",
    difficulty: "Hard",
    dialects: [
      {
        id: "arabic-msa",
        name: "Modern Standard Arabic",
        flag: "🕌",
        region: "Middle East / Global",
        continent: "Asia",
        coachPrompt:
          "You are a Modern Standard Arabic tutor. Speak clearly, use formal grammar, and explain cultural context.",
        cultureNotes: "Used in news, media, education, and formal writing.",
      },
      {
        id: "arabic-levantine",
        name: "Levantine Arabic",
        flag: "🇱🇧",
        region: "Lebanon / Syria / Jordan / Palestine",
        continent: "Asia",
        coachPrompt:
          "You are a Levantine Arabic tutor. Speak warmly, casually, and use natural Levantine expressions.",
        cultureNotes: "Famous for warmth, hospitality, and expressive phrases.",
      },
      {
        id: "arabic-darija",
        name: "Darija (Moroccan Arabic)",
        flag: "🇲🇦",
        region: "Morocco",
        continent: "Africa",
        coachPrompt:
          "You are a Moroccan Darija tutor. Use real street language, slang, and cultural nuance.",
        cultureNotes:
          "Highly unique dialect with Amazigh, French, and Spanish influence.",
      },
      {
        id: "arabic-egyptian",
        name: "Egyptian Arabic",
        flag: "🇪🇬",
        region: "Egypt",
        continent: "Africa",
        coachPrompt:
          "You are an Egyptian Arabic tutor. Friendly, humorous, and expressive. Use everyday Egyptian phrases.",
        cultureNotes: "Most widely understood dialect due to Egyptian cinema.",
      },
    ],
  },

  {
    id: "spanish",
    name: "Spanish",
    flag: "🇪🇸",
    writingSystem: "Latin",
    difficulty: "Easy",
    dialects: [
      {
        id: "spanish-mexico",
        name: "Mexican Spanish",
        flag: "🇲🇽",
        region: "Mexico",
        continent: "North America",
        coachPrompt:
          "You are a Mexican Spanish tutor. Use friendly tone, everyday slang, and culturally authentic examples.",
        cultureNotes: "Rich slang, expressive tone, and warm communication style.",
      },
      {
        id: "spanish-spain",
        name: "Castilian Spanish",
        flag: "🇪🇸",
        region: "Spain",
        continent: "Europe",
        coachPrompt:
          "You are a Castilian Spanish tutor. Use clear pronunciation and practical examples.",
        cultureNotes: "Distinct pronunciation and vocabulary differences.",
      },
      {
        id: "spanish-guatemala",
        name: "Guatemalan Spanish",
        flag: "🇬🇹",
        region: "Guatemala",
        continent: "Central America",
        coachPrompt:
          "You are a Guatemalan Spanish tutor. Speak gently, clearly, and use local expressions.",
        cultureNotes: "Known for clarity and gentle tone.",
      },
    ],
  },

  {
    id: "french",
    name: "French",
    flag: "🇫🇷",
    writingSystem: "Latin",
    difficulty: "Medium",
    dialects: [
      {
        id: "french-paris",
        name: "Parisian French",
        flag: "🇫🇷",
        region: "France",
        continent: "Europe",
        coachPrompt:
          "You are a Parisian French tutor. Elegant, concise, and helpful for beginners.",
        cultureNotes: "Standard French used in education and media.",
      },
      {
        id: "french-quebec",
        name: "Quebecois French",
        flag: "🇨🇦",
        region: "Canada",
        continent: "North America",
        coachPrompt:
          "You are a Quebecois French tutor. Friendly tone, highlight pronunciation differences.",
        cultureNotes: "Distinct accent and vocabulary.",
      },
    ],
  },
];
