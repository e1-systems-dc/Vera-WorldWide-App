import React, { useState } from 'react';
import { Globe, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ROOT_PATH = "artifacts/vera-worldwide-v1";

export default function LanguagePicker({ setView, appLanguages, userProfile, setUserProfile, onComplete }) {
  const [selectedDialect, setSelectedDialect] = useState(userProfile?.dialectName || '');
  const [saving, setSaving] = useState(false);

  const handleSelect = async () => {
    if (!selectedDialect) return;
    setSaving(true);
    
    try {
      // 1. Update Local State immediately
      if (setUserProfile) {
        setUserProfile(prev => ({ ...prev, dialectName: selectedDialect }));
      }

      // 2. Save permanently to Firebase
      const auth = getAuth();
      const db = getFirestore();
      if (auth.currentUser) {
        await updateDoc(doc(db, `${ROOT_PATH}/users`, auth.currentUser.uid), {
          dialectName: selectedDialect
        });
      }

      // 3. Trigger the App.jsx routing (Go to Placement or Dashboard)
      if (onComplete) onComplete();
    } catch (error) {
      console.error("Error saving dialect:", error);
      setSaving(false);
    }
  };

  const activeLanguages = Object.entries(appLanguages || {})
    .filter(([_, lang]) => lang.status === 'active')
    .map(([key, lang]) => ({ key, ...lang }));

  const votingLanguages = Object.entries(appLanguages || {})
    .filter(([_, lang]) => lang.status === 'voting')
    .map(([key, lang]) => ({ key, ...lang }));

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-6 relative overflow-hidden flex flex-col items-center justify-center animate-in fade-in duration-500">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12">
          <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Select Target Dialect</h1>
          <p className="text-slate-400 text-lg">Choose an active Neural Pathway to begin your immersion.</p>
        </div>

        {/* Active Languages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {activeLanguages.map((lang) => (
            <button
              key={lang.key}
              onClick={() => setSelectedDialect(lang.name)}
              className={`p-6 rounded-3xl border text-left transition-all flex flex-col justify-between ${
                selectedDialect === lang.name 
                  ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-[0_0_30px_rgba(6,182,212,0.2)] scale-[1.02]' 
                  : 'bg-slate-900/60 border-white/5 text-slate-400 hover:border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{lang.flag}</span>
                {selectedDialect === lang.name && <CheckCircle2 size={24} className="text-cyan-400" />}
              </div>
              <div>
                <h3 className="font-black text-lg text-white mb-1">{lang.name}</h3>
                <p className="text-xs leading-relaxed opacity-80">{lang.description || lang.family}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Voting Languages (Locked) */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">In Development (Voting Open)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            {votingLanguages.map(lang => (
              <div key={lang.key} className="p-4 rounded-2xl bg-[#020617] border border-white/5 flex flex-col items-center text-center">
                <span className="text-2xl mb-2 grayscale">{lang.flag}</span>
                <h4 className="text-sm font-bold text-slate-500 mb-2">{lang.name}</h4>
                <Lock size={12} className="text-slate-600" />
              </div>
            ))}
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <button 
            onClick={handleSelect}
            disabled={!selectedDialect || saving}
            className="w-full max-w-md py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-black text-lg rounded-2xl transition-all shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2"
          >
            {saving ? 'Calibrating...' : 'Initialize Pathway'} <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}