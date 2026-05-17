const coachSet = (language, locale, culture) => ({
  coachPrompt: `We will practice ${language} with a ${locale} feel. ${culture}`,
  starterPhrases: [
    {
      answer: `In ${language}, a natural answer would sound warm and direct.`,
      expand: `Good start. Add one more sentence in ${language} so the idea feels complete.`,
      praise: `That was clear. Your meaning came through well.`,
      practiceQuestion: `Now answer this: how would you introduce yourself in ${language}?`,
      culturalNote: `Cultural note: ${culture}`,
    },
    {
      answer: `You are close. Focus on rhythm and word order for a more native delivery.`,
      expand: `Try saying the same idea again, but shorter and more conversational.`,
      praise: `Nice progress. That sentence feels more confident.`,
      practiceQuestion: `Next prompt: ask for help politely in ${language}.`,
      culturalNote: `Local feel: ${locale} speech often sounds best when it stays relaxed.`,
    },
  ],
});

export const CONTENT = {
  EN_US: {
    name: "English",
    flag: "🇺🇸",
    dialect: "Standard US",
    continent: "North America",
    ...coachSet(
      "English",
      "US",
      "short, confident phrasing usually sounds more natural than long textbook sentences.",
    ),
  },
  ES_MX: {
    name: "Spanish",
    flag: "🇲🇽",
    dialect: "Mexican",
    continent: "North America",
    ...coachSet(
      "Spanish",
      "Mexican",
      "friendly everyday speech often uses warmth and clarity more than formality.",
    ),
  },
  FR_FR: {
    name: "French",
    flag: "🇫🇷",
    dialect: "Parisian",
    continent: "Europe",
    ...coachSet(
      "French",
      "Parisian",
      "casual spoken French often compresses phrases compared with textbook examples.",
    ),
  },
  AR_EGY: {
    name: "Arabic",
    flag: "🇪🇬",
    dialect: "Egyptian (Masri)",
    continent: "Africa",
    ...coachSet(
      "Arabic",
      "Egyptian",
      "Egyptian Arabic often feels musical, quick, and highly conversational.",
    ),
  },
  AR_MSA: {
    name: "Arabic",
    flag: "🇸🇦",
    dialect: "Modern Standard (MSA)",
    continent: "Middle East",
    ...coachSet(
      "Arabic",
      "Modern Standard",
      "MSA is clearer and more formal than street conversation, so precision matters.",
    ),
  },
  MA_DAR: {
    name: "Moroccan Arabic",
    flag: "🇲🇦",
    dialect: "Darija",
    continent: "Africa",
    ...coachSet(
      "Moroccan Arabic",
      "Darija",
      "Darija blends fast local speech with French influence in everyday life.",
    ),
  },
  NG_PID: {
    name: "Nigerian English",
    flag: "🇳🇬",
    dialect: "Pidgin",
    continent: "Africa",
    ...coachSet(
      "Nigerian Pidgin",
      "Nigerian",
      "Pidgin lands best when it feels rhythmic and social instead of over-explained.",
    ),
  },
  SN_WOL: {
    name: "Wolof",
    flag: "🇸🇳",
    dialect: "Wolofal",
    continent: "Africa",
    ...coachSet(
      "Wolof",
      "Senegalese",
      "Wolof conversations often balance directness with respect and social warmth.",
    ),
  },
  ZA_TSO: {
    name: "South African",
    flag: "🇿🇦",
    dialect: "Tsotsitaal",
    continent: "Africa",
    ...coachSet(
      "Tsotsitaal",
      "South African",
      "street energy and attitude are a major part of the voice here.",
    ),
  },
  AR_RIO: {
    name: "Argentine Spanish",
    flag: "🇦🇷",
    dialect: "Rioplatense",
    continent: "Americas",
    ...coachSet(
      "Argentine Spanish",
      "Rioplatense",
      "the regional accent and informal cadence carry a lot of identity.",
    ),
  },
  BR_PAU: {
    name: "Brazilian Portuguese",
    flag: "🇧🇷",
    dialect: "Paulistano",
    continent: "Americas",
    ...coachSet(
      "Brazilian Portuguese",
      "Paulistano",
      "spoken rhythm matters almost as much as vocabulary in everyday conversation.",
    ),
  },
  JM_PAT: {
    name: "Jamaican",
    flag: "🇯🇲",
    dialect: "Patois",
    continent: "Americas",
    ...coachSet(
      "Jamaican Patois",
      "Jamaican",
      "expression, rhythm, and tone are central to how natural it sounds.",
    ),
  },
  CL_CHI: {
    name: "Chilean Spanish",
    flag: "🇨🇱",
    dialect: "Chileno",
    continent: "Americas",
    ...coachSet(
      "Chilean Spanish",
      "Chilean",
      "shortened words and speed are part of the local personality.",
    ),
  },
  US_CRE: {
    name: "USA",
    flag: "🇺🇸",
    dialect: "Louisiana Creole",
    continent: "Americas",
    ...coachSet(
      "Louisiana Creole",
      "Louisiana",
      "heritage and regional flavor shape the tone as much as vocabulary does.",
    ),
  },
  IT_NAP: {
    name: "Italian",
    flag: "🇮🇹",
    dialect: "Napulitano",
    continent: "Europe",
    ...coachSet(
      "Italian",
      "Neapolitan",
      "cultural color and emotional delivery matter a lot in local speech.",
    ),
  },
  UK_GLA: {
    name: "UK English",
    flag: "🇬🇧",
    dialect: "Glaswegian",
    continent: "Europe",
    ...coachSet(
      "Glaswegian English",
      "Glaswegian",
      "sound, compression, and rhythm carry much of the dialect identity.",
    ),
  },
  DE_BER: {
    name: "German",
    flag: "🇩🇪",
    dialect: "Berlinerisch",
    continent: "Europe",
    ...coachSet(
      "German",
      "Berlin",
      "the tone is often blunt, playful, and relaxed rather than overly formal.",
    ),
  },
  JP_KAN: {
    name: "Japanese",
    flag: "🇯🇵",
    dialect: "Kansai-ben",
    continent: "Asia",
    ...coachSet(
      "Japanese",
      "Kansai",
      "local speech can feel more expressive and comedic than standard textbook Japanese.",
    ),
  },
  LB_LEV: {
    name: "Lebanese Arabic",
    flag: "🇱🇧",
    dialect: "Levantine",
    continent: "Asia",
    ...coachSet(
      "Lebanese Arabic",
      "Levantine",
      "modern urban conversation often sounds lighter and faster than formal Arabic.",
    ),
  },
  PH_TAG: {
    name: "Filipino",
    flag: "🇵🇭",
    dialect: "Taglish",
    continent: "Asia",
    ...coachSet(
      "Taglish",
      "Filipino",
      "switching fluidly between tones and registers is part of the real-world style.",
    ),
  },
  IN_BAM: {
    name: "Hindi",
    flag: "🇮🇳",
    dialect: "Bambaiya Hindi",
    continent: "Asia",
    ...coachSet(
      "Hindi",
      "Mumbai",
      "street phrasing often sounds punchier and more playful than formal speech.",
    ),
  },
};

export const activeLanguages = ["EN_US", "ES_MX", "FR_FR", "AR_EGY", "AR_MSA"];
export const pollCandidates = ["JP_KAN", "IT_NAP", "BR_PAU"];
