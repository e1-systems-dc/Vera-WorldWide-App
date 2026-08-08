# **🧠 VERA WORLDWIDE: MASTER ARCHITECTURE & CONTEXT DOCUMENT**

## **1\. PROJECT OVERVIEW & VISION**

* **Identity:** Vera Worldwide is a next-generation, AI-driven language learning platform.  
* **The Mission:** It is designed to be a "Duolingo Killer." It explicitly rejects the "200-Day Illusion" (where users keep streaks but freeze up in real-life conversations) and robotic multiple-choice grammar drills.  
* **Core Philosophy:** Focuses on **conversational fluency**, street-level slang, native pacing, and high-pressure social roleplay.

## **2\. THE TECH STACK**

* **Frontend:** React.js built with Vite.  
* **Backend:** Node.js / Express local backend (housed in a backend/ folder) containing controllers, routes, and services (aiService.js, tutorService.js) to securely handle AI logic and hide API keys.  
* **Database:** Firebase (Firestore) for real-time cloud data storage.  
* **Deployment:** Hosted via GitHub Pages (deployed from the gh-pages branch).  
* **Voice Engine:** Utilizes browser-based Speech-to-Text (STT) and Text-to-Speech (TTS) for real-time spoken interaction.

## **3\. CORE PLATFORM VIEWS (ROUTING)**

The application is managed by App.jsx which handles routing between these primary views:

1. **Landing (Landing.jsx):** The highly persuasive, premium front door. Handles user onboarding, auth modals, feature highlights, and the "Global Vote" for new dialects.  
2. **Tutor (Tutor.jsx):** The core neural AI learning classroom where real-time voice and text roleplay happens.  
3. **Admin (Admin.jsx):** The developer/monitoring portal.  
   * *Access Code:* VERA2026  
   * *Features:* Chat log monitoring, dialect content management (toggling dialects between Active, Voting, or Hidden), Financial/Legal dashboard, and an integrated AI Executive Assistant.  
4. **Arcade (Arcade.jsx \- *In Development*):** The "Vocab Clash Arena," a planned head-to-head multiplayer arcade for Premium users.

## **4\. SUBSCRIPTION TIERS & PRICING**

1. **Curious Tier ($0/forever):** Free access. Includes 5 Energy Zaps per day and access to the Massive Lesson Path and Vera Store.  
2. **Plus Tier ($4.99/mo):** The "Best Value" tier. Includes 15 Energy Zaps per day, a 2x Daily Sparks Multiplier, and unlocks interactive Boss Scenarios and Fluency Mode.  
3. **Total Immersion / Premium Tier ($9.99/mo):** Includes Infinite Energy, access to the Vocab Clash Arena, Keep Fluency Sandbox, and All Premium AI Personas.

## **5\. GAMIFICATION & THE ECONOMY**

* **Sparks:** The in-app currency earned by completing lessons and winning roleplays. Used in the Vera Store to unlock premium aesthetics and exclusive AI personas.  
* **Zaps (Energy):** The stamina system that limits daily play for free/lower-tier users.  
* **Flames (Streak):** Tracks consecutive daily logins and engagement.  
* **Boss Scenarios:** High-stakes roleplay events (e.g., talking your way out of a lost passport with a strict AI customs agent) required to pass modules.

## **6\. THE AI "NEURAL ENGINE" MECHANICS**

* **Neural Adaptive Tolerance:** The AI does not use a binary "pass/fail" system. It listens and analyzes accents, pacing, and vocabulary. If a user struggles, the AI slows down its speech and offers adaptive hints. As the user improves, the AI demands native-level speed.  
* **Personal AI Shadow:** The engine targets unique pronunciation gaps and grammatical slips tailored specifically to the individual user.

## **7\. FIRESTORE DATABASE ARCHITECTURE**

* **Public Data Path:** /artifacts/vera-worldwide-v1/public/data/  
  * chat\_logs: AI monitoring and user inputs.  
  * config: App settings, global dialect polls, etc.  
  * platform\_stats: Global platform analytics.  
  * arcade\_sessions: Multiplayer lobby/match data.  
* **User Data Path:** /artifacts/vera-worldwide-v1/users/{userId}/  
  * Tracks individual learner progress, unlocked tiers, Sparks, Zaps, and Flames.

## **8\. STRICT DEVELOPMENT RULES (THE "BLUEPRINT")**

*Any AI generating code for this project MUST adhere to these 3 architectural rules:*

* **Rule 1 (Strict Paths):** All Firestore operations MUST use full, absolute paths starting precisely from artifacts/vera-worldwide-v1/....  
* **Rule 2 (No Complex Queries):** Fetch entire collections and handle all filtering/sorting on the frontend to avoid Firebase composite index errors.  
* **Rule 3 (Auth Guard):** Ensure signInAnonymously or standard Google Auth is completely awaited and verified before ANY database read/write calls are attempted.

## **9\. UI/UX & BRANDING GUIDELINES**

* **Theme:** "Dark Glass" Premium UI. Dark slate background (\#020617 or slate-950) with tactile film-grain noise overlays to feel like high-end software.  
* **Color Palette (Jewel Tones):** \* *Cyan/Electric Blue:* Represents Logic/Technology (The Neural Engine).  
  * *Emerald/Teal:* Represents Growth/Success (Boss Scenarios & Progress).  
  * *Violet/Amethyst:* Represents Premium Exclusivity (The Sparks Economy & Store).  
* **Spacing:** UI relies heavily on massive white space (e.g., py-40 padding between sections) to create an airy, Apple-esque aesthetic.

