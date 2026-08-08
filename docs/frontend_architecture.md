# VERA WORLDWIDE: FRONTEND ARCHITECTURE & STATE MAP
**Version:** 1.0.0
**Purpose:** Defines the React component tree, routing mechanism, and global state management for the Vera Worldwide application.

---

## 1. GLOBAL STATE MANAGEMENT (App.jsx)
`App.jsx` acts as the global state provider and the central router for the application. It listens to Firebase Auth and fetches the user's Firestore document on login.

**Core State Variables in App.jsx:**
* `user` (Object | null): The raw Firebase authentication object (uid, email, displayName).
* `userData` (Object | null): The fetched Firestore document (`/users/{userId}`) containing `economy`, `progression`, and `inventory`.
* `view` (String): The current active screen. Determines which top-level component renders.
  * Valid views: `'landing' | 'dashboard' | 'tutor' | 'arcade' | 'admin'`
* `appLanguages` (Object): The global configuration object dictating which dialects are 'active', 'voting', or 'hidden'.

---

## 2. COMPONENT TREE HIERARCHY

```text
src/
 ├── main.jsx                 # Vite entry point, renders <App />
 ├── App.jsx                  # State manager and conditional router
 │
 ├── components/
 │    ├── LandingPage.jsx     # Unauthenticated public landing page
 │    │    ├── Navbar         # Login/Signup triggers
 │    │    ├── Hero           # Call to action
 │    │    ├── Pricing        # Tier breakdowns
 │    │    └── AuthModal      # Firebase Google Popup / Email Login
 │    │
 │    ├── Dashboard.jsx       # Authenticated user home
 │    │    ├── TopBar         # Shows Sparks, Zaps, and Flames (reads from userData)
 │    │    ├── DialectPicker  # Select active language
 │    │    └── LessonPath     # Module selection (triggers 'tutor' view)
 │    │
 │    ├── Tutor.jsx           # Core AI Engine Classroom
 │    │    ├── VoiceEngine    # STT/TTS browser API handlers
 │    │    ├── ChatHistory    # Renders the back-and-forth messages
 │    │    └── InputArea      # Text/Mic input
 │    │
 │    ├── Arcade.jsx          # Premium Vocab Clash Arena (Multiplayer)
 │    │    ├── Matchmaker     # Finds opponents via Firestore public lobby
 │    │    └── ArenaUI        # Real-time competitive UI
 │    │
 │    └── Admin.jsx           # Developer Portal (Requires VERA2026 code)
 │         ├── ChatLogs       # Monitors /public/data/chat_logs
 │         └── DialectManager # Toggles appLanguages statuses
 │
 └── services/
      ├── firebase.js         # Firebase initialization and auth exports
      ├── dbService.js        # Firestore read/write helper functions
      └── apiService.js       # Axios calls to local Node.js backend (AI processing)
