import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { SpeedInsights } from '@vercel/speed-insights/react';

// --- COMPONENT IMPORTS ---
import LandingPage from './Components/LandingPage';
import LanguagePicker from './Components/LanguagePicker';
import Dashboard from './Components/Dashboard';
import TutorChat from './Components/TutorChat';
import PlacementQuiz from './Components/PlacementQuiz';
import StructuredLesson from './Components/StructuredLesson';
import Store from './Components/Store';
import Arcade from './Components/Arcade';
import VocabVault from './Components/VocabVault';
import LessonPath from './Components/LessonPath';

const firebaseConfig = {
  apiKey: "AIzaSyAFmqai9TJO2XvuPNCagP-Fk5QWvk3QjLo",
  authDomain: "vera-worldwide-app.firebaseapp.com",
  projectId: "vera-worldwide-app",
  storageBucket: "vera-worldwide-app.firebasestorage.app",
  messagingSenderId: "846681584891",
  appId: "1:846681584891:web:3ae231cab89e829b172c5e",
  measurementId: "G-G437GG655Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const ROOT_PATH = "artifacts/vera-worldwide-v1";

const appTranslations = {
  appName: "Vera Worldwide",
  globalVote: "Global Dialect Poll",
  selectDialect: "Select Your Target Dialect"
};

// Full Atlas Dialects
const globalAppLanguages = {
  "es-MX": { name: "Mexican Spanish", flag: "🇲🇽", status: "active", family: "Spanish" },
  "es-CO": { name: "Colombian Spanish", flag: "🇨🇴", status: "active", family: "Spanish" },
  "ar-MA": { name: "Moroccan Darija", flag: "🇲🇦", status: "active", family: "Arabic" },
  "ja-JP": { name: "Tokyo Japanese", flag: "🇯🇵", status: "active", family: "Japanese" },
  "fr-FR": { name: "Parisian French", flag: "🇫🇷", status: "voting", family: "French" }
};

export default function App() {
  const [view, setView] = useState('landing');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // HOOK 1: Handle Authentication & Profile Loading
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userRef = doc(db, `${ROOT_PATH}/users`, currentUser.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserProfile(userData);
            
            // GATEKEEPER ROUTING:
            if (!window.location.search.includes('success=true')) {
               setView(userData.cefrLevel ? 'dashboard' : 'placement_quiz'); 
            }
          } else {
            const newProfile = {
              tier: 'free', sparks: 0, energy: 5, streak: 0,
              dialectName: 'Mexican Spanish', nativeLanguage: 'English',
              createdAt: new Date().toISOString()
            };
            await setDoc(userRef, newProfile);
            setUserProfile(newProfile);
            if (!window.location.search.includes('success=true')) {
              setView('placement_quiz'); 
            }
          }
        } catch (err) {
          console.error("Firestore error:", err);
          setView('dashboard');
        }
      } else {
        setUser(null);
        setUserProfile(null);
        setView('landing');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // HOOK 2: Handle Stripe Redirects (Must be top-level!)
  useEffect(() => {
    if (window.location.search.includes('success=true') && user) {
      const upgradeAccount = async () => {
        try {
          const urlParams = new URLSearchParams(window.location.search);
          const purchasedTier = urlParams.get('tier') || 'premium';
          
          const userRef = doc(db, `${ROOT_PATH}/users`, user.uid);
          await updateDoc(userRef, { 
            tier: purchasedTier, 
            energy: purchasedTier === 'premium' ? 999 : 15 
          });
          
          setUserProfile(prev => ({
            ...prev, 
            tier: purchasedTier, 
            energy: purchasedTier === 'premium' ? 999 : 15 
          }));

          window.history.replaceState(null, '', window.location.pathname);
          setView('dashboard');
          alert(`🎉 PAYMENT SUCCESSFUL! Welcome to Vera ${purchasedTier.toUpperCase()}.`);
        } catch (err) {
          console.error("Failed to apply upgrade:", err);
        }
      };
      upgradeAccount();
    }
  }, [user]);

  if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-cyan-400">Booting Neural Engine...</div>;

  const renderView = () => {
    switch (view) {
      case 'landing':
        return <LandingPage setView={setView} t={appTranslations} appLanguages={globalAppLanguages} />;
      case 'language_picker':
        return <LanguagePicker setView={setView} appLanguages={globalAppLanguages} userProfile={userProfile} setUserProfile={setUserProfile} onComplete={() => setView(userProfile?.cefrLevel ? 'dashboard' : 'placement_quiz')} />;
      case 'placement_quiz':
        return <PlacementQuiz setView={setView} userProfile={userProfile} setUserProfile={setUserProfile} />;
      case 'dashboard':
        return <Dashboard setView={setView} userProfile={userProfile} onSelectLesson={(l) => { setCurrentLesson(l); setView(l.type === 'boss' ? 'tutor' : 'structured_lesson'); }} />;
      case 'structured_lesson':
        return <StructuredLesson setView={setView} dialectName={userProfile?.dialectName} lesson={currentLesson} userProfile={userProfile} setUserProfile={setUserProfile} />;
      case 'tutor':
        return <TutorChat setView={setView} userProfile={userProfile} lesson={currentLesson} />;
      case 'store':
        return <Store setView={setView} userProfile={userProfile} />;
      case 'arcade':
        return <Arcade setView={setView} userProfile={userProfile} onStartMatch={(match) => { setCurrentLesson(match); setView('tutor'); }} />;
      case 'vocab':
        return <VocabVault setView={setView} userProfile={userProfile} />;
      case 'lesson_path':
 		 return <LessonPath setView={setView} userProfile={userProfile} />;
      default:
        return <div className="min-h-screen bg-[#020617] p-10 text-white">404: Not Found <button onClick={() => setView('dashboard')} className="ml-4 underline text-cyan-400">Go Back</button></div>;
    }
  };

  return (
    <>
      {renderView()}
      <SpeedInsights />
    </>
  );
}