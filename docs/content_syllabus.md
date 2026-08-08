# VERA WORLDWIDE: CONTENT & SYLLABUS MATRIX
**Version:** 1.0.0
**Purpose:** Maps out the educational progression, module structure, and Boss Scenario parameters for Vera's dialects.

---

## 1. COURSE STRUCTURE OVERVIEW
Every dialect path is divided into **Modules**. Each Module represents a phase of real-world integration.
* **Lessons:** 4 to 6 standard interactive chat sessions per module focusing on specific vocabulary and grammar.
* **The Boss Scenario:** The final hurdle of a module. A high-stakes roleplay that must be passed to unlock the next Module.

---

## 2. EXAMPLE DIALECT: MEXICAN SPANISH (`es-MX`)

### MODULE 1: THE ARRIVAL
* **Focus:** Airport navigation, immigration, lost items, and basic transportation.
* **Lesson 1:** Hailing an Uber outside Terminal 2. (Focus: Greetings, confirming destinations, basic numbers).
* **Lesson 2:** Ordering a coffee while jetlagged. (Focus: Politeness, sizes, modifiers like "sin azúcar").
* **Lesson 3:** Changing currency at a questionable kiosk. (Focus: Rates, counting money, asking for clarification).
* **BOSS SCENARIO 1: The Customs Agent**
  * *Persona:* Officer Vargas (Strict, impatient).
  * *Prompt:* User must explain they lost their passport and successfully ask for directions to the temporary visa office.
  * *Failure Trigger:* Speaking in English, or taking more than 4 turns to explain the problem.

### MODULE 2: THE STREETS
* **Focus:** Markets, street food, haggling, and asking for directions.
* **Lesson 1:** Buying tacos al pastor. (Focus: Quantities, ingredients, spice levels).
* **Lesson 2:** Asking a local for directions to the Zócalo because your phone died. (Focus: Imperatives, spatial directions).
* **Lesson 3:** Haggling at Mercado de Sonora. (Focus: Pricing, rejecting offers politely).
* **BOSS SCENARIO 2: The Aggressive Vendor**
  * *Persona:* Doña Carmen (Pushy but friendly market vendor).
  * *Prompt:* User must successfully reject buying an overpriced souvenir, but negotiate a fair price for a different item without offending her.
  * *Failure Trigger:* Agreeing to the first price, or using overly rude rejections.

---

## 3. ADDING NEW CONTENT (Developer Rule)
When generating new modules, the AI must ensure:
1. **No Textbook Sentences:** Do not teach "The apple is red." Teach "I need a painkiller for this headache."
2. **Cultural Accuracy:** Incorporate dialect-specific slang (e.g., using "¿Qué onda?" or "chido" for Mexican Spanish).
3. **Escalating Stakes:** Boss scenarios must introduce a realistic point of conflict or urgency.
