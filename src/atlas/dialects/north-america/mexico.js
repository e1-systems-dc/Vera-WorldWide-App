export const mexico = {
  id: "mx-spanish", // Kept your ID format
  name: "Mexico",
  country: "Mexico",
  dialect: "Mexican Spanish",
  flag: "🇲🇽",
  currency: "MXN",
  
  // --- YOUR EXISTING CONTEXT DATA (For Sandbox/Global settings) ---
  speakingTutors: [
    { name: "Diego", vibe: "Warm, friendly" },
    { name: "Luis", vibe: "Relaxed, casual" },
    { name: "Javier", vibe: "Calm, steady" },
    { name: "Ana", vibe: "Soft, supportive" },
    { name: "Camila", vibe: "Gentle, melodic" },
    { name: "Sofía", vibe: "Warm, expressive" },
    { name: "Gael", vibe: "Modern, upbeat" }
  ],
  coachPrompts: {
    general: "We will practice Mexican Spanish with a warm, expressive tone. Keep it natural and friendly."
  },
  starterPhrases: [
    { answer: "¿Cómo estás?", expand: "Add how you're feeling." },
    { answer: "Estoy bien.", expand: "Add one detail about your day." }
  ],
  slang: [
    { term: "Órale", meaning: "Wow / okay / let's go" },
    { term: "Chido", meaning: "Cool" },
    { term: "Vale", meaning: "Okay" }
  ],
  pronunciationNotes: [
    "Mexican Spanish has clear vowels and steady rhythm.",
    "Diminutives (-ito/-ita) are common."
  ],
  culturalNotes: [
    "Speech is warm and expressive.",
    "Hospitality and friendliness shape conversation."
  ],

  // --- THE NEW LESSON PATH DATA (For the Dashboard UI) ---
  modules: [
    {
      id: "mod_1",
      title: "The Arrival",
      description: "Airport navigation, immigration, lost items, and basic transportation.",
      lessons: [
        {
          id: "les_1_1",
          title: "Hailing an Uber",
          focus: "Greetings, confirming destinations, basic numbers.",
          scenarioPrompt: "You are an Uber driver outside Terminal 2 at Benito Juárez International Airport. Speak authentically. Ask the user to confirm the destination and terminal number.",
          energyCost: 1,
          rewardSparks: 50
        },
        {
          id: "les_1_2",
          title: "The Jetlagged Coffee",
          focus: "Politeness, sizes, modifiers like 'sin azúcar'.",
          scenarioPrompt: "You are a barista at a busy airport cafe in Mexico City. The user is trying to order a coffee.",
          energyCost: 1,
          rewardSparks: 50
        },
        {
          id: "les_1_3",
          title: "Currency Exchange",
          focus: "Rates, counting money, asking for clarification.",
          scenarioPrompt: "You are a clerk at a questionable currency exchange kiosk. The user wants to change USD to MXN. Use fast-paced numbers.",
          energyCost: 1,
          rewardSparks: 50
        }
      ],
      bossScenario: {
        id: "boss_1",
        title: "The Customs Agent",
        persona: "Officer Vargas",
        personaTraits: "Strict, impatient, formal (usted).",
        systemPrompt: "You are Officer Vargas, a strict customs agent at MEX airport. Speak 100% in formal Mexican Spanish. The user must explain they lost their passport and ask for directions to the temporary visa office. If they speak English, express extreme annoyance. Once they hit the win condition in under 4 turns, reply exactly with: '[SYSTEM: SCENARIO CLEARED] Pase a la oficina 4, por favor. Siguiente.'",
        winCondition: "User explains lost passport and successfully asks for directions to the visa office.",
        failureTriggers: ["Speaking in English", "Taking more than 4 turns to explain"],
        energyCost: 3,
        rewardSparks: 250
      }
    },
    {
      id: "mod_2",
      title: "The Streets",
      description: "Markets, street food, haggling, and asking for directions.",
      lessons: [
        {
          id: "les_2_1",
          title: "Tacos al Pastor",
          focus: "Quantities, ingredients, spice levels.",
          scenarioPrompt: "You are a fast-paced taquero street vendor. Ask how many tacos they want, what ingredients, and if they want spicy salsa (¿Con todo? ¿Salsa roja o verde?).",
          energyCost: 1,
          rewardSparks: 50
        },
        {
          id: "les_2_2",
          title: "Dead Phone Directions",
          focus: "Imperatives, spatial directions.",
          scenarioPrompt: "You are a friendly local on the street. The user's phone is dead and they are asking for directions to the Zócalo.",
          energyCost: 1,
          rewardSparks: 50
        },
        {
          id: "les_2_3",
          title: "Market Haggling",
          focus: "Pricing, rejecting offers politely.",
          scenarioPrompt: "You are a vendor at Mercado de Sonora. You start with a very high price for an alebrije.",
          energyCost: 1,
          rewardSparks: 50
        }
      ],
      bossScenario: {
        id: "boss_2",
        title: "The Aggressive Vendor",
        persona: "Doña Carmen",
        personaTraits: "Pushy but friendly, persistent.",
        systemPrompt: "You are Doña Carmen, a pushy market vendor. Try to sell the user an overpriced souvenir. They must successfully reject it, but negotiate a fair price for a different item without offending you.",
        winCondition: "Reject initial overpriced item and negotiate a fair price for something else.",
        failureTriggers: ["Agreeing to the first price", "Using overly rude rejections"],
        energyCost: 3,
        rewardSparks: 250
      }
    }
  ]
};