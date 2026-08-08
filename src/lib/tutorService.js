import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";

// -----------------------------
// FIREBASE CONFIG (CLEANED)
// -----------------------------
export const firebaseConfig = {
  apiKey: "AIzaSyAFmqai9TJO2XvuPNCagP-Fk5QWvk3QjLo",
  authDomain: "vera-worldwide-app.firebaseapp.com",
  projectId: "vera-worldwide-app",
  storageBucket: "vera-worldwide-app.firebasestorage.app",
  messagingSenderId: "846681584891",
  appId: "1:846681584891:web:3ae231cab89e829b172c5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Option 1 — simple)
export const db = getFirestore(app);

// -----------------------------
// AI CONSTANTS
// -----------------------------
export const MODEL_NAME = "gpt-4o-mini";
export const VERA_SYSTEM_PROMPT = `
You are Vera, a warm, encouraging, culturally aware language tutor.
You adapt to the user's dialect, learning goals, and comfort level.
You keep responses concise unless asked to expand.
`;

// -----------------------------
// UPDATE LANGUAGE STATUS
// -----------------------------
export async function updateLanguageStatus(languageKey, status) {
  try {
    const ref = doc(
      collection(db, "artifacts", firebaseConfig.appId, "public", "data", "languages"),
      languageKey
    );

    await setDoc(ref, {
      status,
      updatedAt: serverTimestamp()
    }, { merge: true });

    return { success: true };
  } catch (err) {
    console.error("updateLanguageStatus error:", err);
    return { success: false, error: err.message };
  }
}

// -----------------------------
// CREATE TUTOR REQUEST
// -----------------------------
export function createTutorRequest({
  input,
  language,
  sessionMode,
  practiceMode
}) {
  return {
    message: input,
    sessionMode,
    practiceMode,
    language: {
      name: language.name,
      dialect: language.dialect,
      continent: language.continent,
      coachPrompt: language.coachPrompt
    }
  };
}
