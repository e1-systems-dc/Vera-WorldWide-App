import React, { useState } from 'react';
import { Map, Zap, Play, Target, X, ChevronRight, Crown } from 'lucide-react';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ROOT_PATH = "artifacts/vera-worldwide-v1";

export default function StructuredLesson({ setView, dialectName, lesson, userProfile, setUserProfile }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const zapCost = lesson?.type === 'boss' ? 3 : 1;
  const currentEnergy = userProfile?.energy || 0;
  const isInfinite = userProfile?.tier === 'premium';
  
  const canAfford = isInfinite || currentEnergy >= zapCost;

  const handleStartMission = async () => {
    if (!canAfford) {
      setError("Insufficient Zaps. Upgrade your Neural Link to continue.");
      return;
    }

    setLoading(true);
    
    // Deduct Zap from Firebase
    if (!isInfinite) {
      try {
        const auth = getAuth();
        const db = getFirestore();
        if (auth.currentUser) {
          await updateDoc(doc(db, `${ROOT_PATH}/users`, auth.currentUser.uid), {
            energy: increment(-zapCost)
          });
          if (setUserProfile) {
             setUserProfile(prev => ({ ...prev, energy: prev.energy - zapCost }));
          }
        }
      } catch (err) {
        console.error("Failed to deduct Zaps:", err);
      }
    }
    
    setLoading(false);
    setView('tutor');
  };

  if (!lesson) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans relative overflow-hidden flex flex-col">
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${lesson.type === 'boss' ? 'bg-rose-900/10' : 'bg-cyan-900/10'}`} />

      <header className="p-6 relative z-10 flex justify-between items-center">
        <button onClick={() => setView('dashboard')} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition text-slate-400 hover:text-white border border-white/5"><X size={20} /></button>
        <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-1.5 rounded-full border border-white/5">
          <Zap size={16} className="text-emerald-400" />
          <span className="font-black text-white">{isInfinite ? 'INFINITE' : currentEnergy}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 max-w-2xl mx-auto w-full">
        <div className={`text-center mb-10 ${lesson.type === 'boss' ? 'text-rose-400' : 'text-cyan-400'}`}>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">{lesson.title}</h1>
          <p className="text-slate-400 text-lg">Target Dialect: <span className="text-white font-medium">{dialectName}</span></p>
        </div>

        {error && (
          <div className="w-full bg-rose-950/50 border border-rose-900/50 text-rose-300 p-4 rounded-xl mb-6 text-center text-sm font-bold flex flex-col items-center gap-3">
            {error}
            <button onClick={() => setView('store')} className="px-6 py-2 bg-rose-600 text-white rounded-lg flex items-center gap-2"><Crown size={16}/> View Upgrades</button>
          </div>
        )}

        <button 
          onClick={handleStartMission}
          disabled={loading || (!canAfford && !error)}
          className={`w-full py-5 font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3 group ${
            lesson.type === 'boss' 
              ? 'bg-gradient-to-r from-rose-500 to-orange-600 text-white shadow-[0_0_30px_rgba(225,29,72,0.3)]' 
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.3)]'
          }`}
        >
          {loading ? 'Compiling...' : 'Initialize Sequence'}
          {!loading && (
            <span className="flex items-center gap-1 text-sm bg-black/20 px-2 py-1 rounded-md ml-2">
              Cost: {zapCost} <Zap size={14} fill="currentColor" className="text-yellow-400" />
            </span>
          )}
        </button>
      </main>
    </div>
  );
}