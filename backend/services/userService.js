import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { signInAnonymously, getAuth } from "firebase/auth";

// Rule 1: Master root path definition
const ROOT_PATH = "artifacts/vera-worldwide-v1";

/**
 * Ensures user is authenticated anonymously and fetches or initializes their Firestore profile.
 */
export async function initializeUserProfile(db, auth) {
  try {
    // Rule 3: Auth Guard - Always await anonymous auth
    let currentUser = auth.currentUser;
    if (!currentUser) {
      const cred = await signInAnonymously(auth);
      currentUser = cred.user;
    }

    const userId = currentUser.uid;
    const userDocRef = doc(db, `${ROOT_PATH}/users`, userId);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      return { userId, data: userSnap.data() };
    } else {
      // Initialize default user document per blueprint specs
      const initialData = {
        tier: 'free',
        streak: 1,
        energy: 5,
        sparks: 100,
        createdAt: new Date().toISOString(),
        unlockedModules: ['mod-1']
      };
      await setDoc(userDocRef, initialData);
      return { userId, data: initialData };
    }
  } catch (error) {
    console.error("Firebase Sync Error:", error);
    return null;
  }
}

/**
 * Updates specific metrics like Sparks, Energy, or Streak in Firestore.
 */
export async function updateUserMetrics(db, userId, updates) {
  try {
    if (!userId) return;
    const userDocRef = doc(db, `${ROOT_PATH}/users`, userId);
    await updateDoc(userDocRef, updates);
  } catch (error) {
    console.error("Failed updating metrics in Firestore:", error);
  }
}