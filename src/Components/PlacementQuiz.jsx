import React, { useState } from 'react';
import { Target, Play, HelpCircle, Loader2, BrainCircuit, ArrowRight, Award, Zap } from 'lucide-react';
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const ROOT_PATH = "artifacts/vera-worldwide-v1";

// Mapping ratios to CEFR Levels and psychological ranks
const getLevelDetails = (ratio) => {
  if (ratio >= 0.8) return { level: 'B2', rank: 'Pro / Advanced', desc: "You have strong conversational instincts. Vera will focus on native slang, high-speed pacing, and complex social pressure." };
  if (ratio >= 0.6) return { level: 'B1', rank: 'Conversationalist', desc: "You know your way around the language. Vera will now break you out of textbook habits and force real-world spontaneity." };
  if (ratio >= 0.4) return { level: 'A2', rank: 'Novice / Survivor', desc: "You can survive basic encounters. Vera's Neural Engine will now build your confidence in unscripted, unpredictable scenarios." };
  return { level: 'A1', rank: 'Beginner / Tourist', desc: "You are at the starting line. Vera will build your foundational muscle memory without making you repeat robotic phrases." };
};

export default function PlacementQuiz({ setView, userProfile, setUserProfile }) {
  const [hasStarted, setHasStarted] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [error, setError] = useState(null);
  
  // New State for the Results Screen
  const [isFinished, setIsFinished] = useState(false);
  const [finalLevel, setFinalLevel] = useState(null);

  const startAssessment = async () => {
    setHasStarted(true);
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/placement`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          targetDialect: userProfile?.dialectName || 'Mexican Spanish',
          nativeLanguage: userProfile?.nativeLanguage || 'English'
        })
      });
      const data = await res.json();
      if (data.success && data.data && data.data.questions) {
          setQuiz(data.data.questions);
      } else {
          setError("Backend failed to generate the matrix. Please check your terminal.");
      }
    } catch (err) {
      console.error("Quiz Fetch Error:", err);
      setError("Cannot connect to the Neural Engine on port 3000.");
    }
    setLoading(false);
  };

  const handleAnswer = (opt) => {
    if (checking) return;
    setSelectedOpt(opt);
    setChecking(true);

    const isCorrect = opt === quiz[currentStep].correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);

    setTimeout(() => moveToNextStep(isCorrect ? score + 1 : score), 1200);
  };

  const handleSkip = () => {
    if (checking) return;
    setSelectedOpt("SKIPPED");
    setChecking(true);
    setTimeout(() => moveToNextStep(score), 800);
  };

  const moveToNextStep = (currentScore) => {
    if (currentStep + 1 < quiz.length) {
      setCurrentStep(prev => prev + 1);
      setChecking(false);
      setSelectedOpt(null);
    } else {
      calculateResults(currentScore);
    }
  };

  const calculateResults = async (finalScore) => {
    const ratio = finalScore / quiz.length;
    const details = getLevelDetails(ratio);
    
    setFinalLevel(details);
    setIsFinished(true);

    if (setUserProfile) {
      setUserProfile(prev => ({ ...(prev || {}), cefrLevel: details.level }));
    }

    try {
      const auth = getAuth();
      const db = getFirestore();
      if (auth.currentUser) {
        await updateDoc(doc(db, `${ROOT_PATH}/users`, auth.currentUser.uid), {
          cefrLevel: details.level
        });
      }
    } catch (err) {
      console.error("Failed saving calibration level", err);
    }
  };

  // --- VIEW 1: THE INTRO ---
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-slate-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] max-w-2xl w-full text-center shadow-2xl relative z-10">
          <div className="w-20 h-20 bg-gradient-to-tr from-cyan-950 to-blue-900 border border-cyan-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <BrainCircuit size={40} className="text-cyan-400" />
          </div>
          
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Neural Calibration</h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Before Vera can generate your custom syllabus for <strong>{userProfile?.dialectName || 'your target language'}</strong>, we need to map your baseline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/5">
              <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Target size={16}/> The Goal</h3>
              <p className="text-xs text-slate-400 leading-relaxed">We bypass the "200-day illusion" by finding exactly where your conversational reflexes break down.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/5">
              <h3 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><Zap size={16}/> The Format</h3>
              <p className="text-xs text-slate-400 leading-relaxed">A rapid-fire, AI-generated assessment. If you don't know an answer, skip it. Honesty builds the best matrix.</p>
            </div>
          </div>

          <button 
            onClick={startAssessment}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/50 group text-lg"
          >
            <Play size={20} fill="currentColor" /> Initialize Assessment
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW 2: LOADING ---
  if (loading || !quiz) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-cyan-400">
        <Loader2 size={48} className="animate-spin mb-6" />
        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Compiling Dialect Matrix...</h2>
        <p className="text-slate-500">{error || "Connecting to LLM Engine..."}</p>
        {error && <button onClick={() => setView('dashboard')} className="mt-8 px-6 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 text-white transition-colors">Force Skip to Dashboard</button>}
      </div>
    );
  }

  // --- VIEW 3: THE RESULTS SCREEN (NEW) ---
  if (isFinished && finalLevel) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-slate-200 relative overflow-hidden animate-in fade-in duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-[2rem] max-w-xl w-full text-center shadow-2xl relative z-10">
          <div className="w-24 h-24 bg-gradient-to-tr from-emerald-950 to-teal-900 border border-emerald-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            <Award size={48} className="text-emerald-400" />
          </div>
          
          <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2">Calibration Complete</h2>
          <h1 className="text-5xl font-black text-white mb-2 tracking-tight">{finalLevel.level}</h1>
          <h3 className="text-xl font-bold text-slate-300 mb-8">{finalLevel.rank}</h3>
          
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-white/5 mb-10 text-left">
            <p className="text-sm text-slate-400 leading-relaxed">
              {finalLevel.desc} Your dashboard and upcoming Boss Scenarios have been specifically calibrated to this baseline.
            </p>
          </div>

          <button 
            onClick={() => setView('dashboard')}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 group text-lg"
          >
            Enter Your Dashboard <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // --- VIEW 4: THE ACTUAL QUIZ ---
  const currentQ = quiz[currentStep];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex flex-col items-center justify-center p-6 relative">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4">
            Phase: {currentStep + 1} / {quiz.length}
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">{currentQ.prompt}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {currentQ.options.map((opt, i) => {
            let btnStyle = "border-white/10 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:bg-slate-800";
            if (checking) {
              if (opt === currentQ.correctAnswer) btnStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]";
              else if (opt === selectedOpt) btnStyle = "border-rose-500 bg-rose-950/40 text-rose-400";
            }
            return (
              <button
                key={i}
                disabled={checking}
                onClick={() => handleAnswer(opt)}
                className={`p-6 rounded-2xl border-2 text-left font-bold text-lg transition-all ${btnStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            disabled={checking}
            onClick={handleSkip}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-colors py-3 px-6 rounded-full hover:bg-slate-900"
          >
            <HelpCircle size={16} /> I don't know (Skip)
          </button>
        </div>
      </div>
    </div>
  );
}