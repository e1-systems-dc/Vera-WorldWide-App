import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { 
  Languages, Star, ArrowRight, Vote, Zap, 
  ShieldCheck, Globe2, Sparkles, ChevronRight, 
  X, Check, Flame, BrainCircuit, Target, Bot, Quote, Lock
} from 'lucide-react';

export default function LandingPage({ setView, t, appLanguages, onVote }) {
  // 1. Fixed: Added missing authMode state
  const [authMode, setAuthMode] = useState(null);

  // 2. Fixed: Dynamically generate poll candidates safely
  const pollCandidates = Object.entries(appLanguages || {})
    .filter(([_, lang]) => lang.status === 'voting')
    .map(([key, lang]) => ({ key, ...lang }));

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setAuthMode(null);
      setView('dashboard');
    } catch (error) {
      console.error("Auth Error:", error);
      setAuthMode(null);
      setView('dashboard');
    }
  };

  const handleManualAuth = (e) => {
    e.preventDefault();
    setAuthMode(null);
	setView('placement_quiz');  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden relative">
      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 text-white font-black text-xl tracking-tight">
            <div className="w-9 h-9 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Languages size={20} className="text-[#020617]" />
            </div>
            {t.appName}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['Why Vera?', 'The Engine', 'Proof', 'Pricing', 'Global Vote'].map((item, i) => (
              <button key={i} onClick={() => scrollTo(['truth', 'method', 'reviews', 'pricing', 'vote'][i])} className="hover:text-emerald-400 transition-colors">{item}</button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setAuthMode('login')} className="text-sm font-semibold text-slate-300 hover:text-white">Log In</button>
            <button onClick={() => setAuthMode('signup')} className="bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-48 pb-40 px-6 text-center max-w-5xl mx-auto overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tight relative z-10">
          Stop Playing Games. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 italic">Start Speaking.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
          Master real dialects through neural-adaptive roleplay. The fluency revolution is here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <button onClick={() => setAuthMode('signup')} className="bg-white text-[#020617] px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]">Begin Your Path</button>
          <button onClick={() => scrollTo('vote')} className="bg-white/5 border border-white/10 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">Vote on Next Dialect</button>
        </div>
      </section>

      {/* The Hard Truth */}
      <section id="truth" className="scroll-mt-24 py-40 max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-10 text-white">The 200-Day Illusion.</h2>
        <p className="text-xl text-slate-400 leading-relaxed">Traditional apps teach you to pass tests, not have conversations. You deserve to be fluent, not just a streak-keeper.</p>
      </section>

      {/* Why Vera / The Engine */}
      <section id="method" className="scroll-mt-24 py-40 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Built for Conversation, Not Textbooks.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Other apps teach you to recognize words. Vera teaches you how to command them under pressure.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BrainCircuit, color: "from-cyan-500 to-blue-600", title: "The 'Never-Freeze' Engine", desc: "We simulate high-pressure social environments. Our neural engine forces you to process language in real-time." },
            { icon: Target, color: "from-emerald-500 to-teal-600", title: "Your Personal AI Shadow", desc: "Vera learns your unique pronunciation struggles and adapts in milliseconds until your gaps are gone." },
            { icon: Flame, color: "from-violet-500 to-purple-600", title: "Stakes-Based Learning", desc: "Win Boss Scenarios to earn your Sparks and prove your real-world fluency." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-white/20 transition-all">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center mb-6`}>
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section id="reviews" className="scroll-mt-24 py-40 bg-white/[0.01] relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black mb-20 text-center">Proof of Fluency.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {['Sarah T.', 'David M.', 'Elena R.'].map((name, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-white/5 bg-[#020617]">
                        <p className="text-slate-300 mb-6 italic">"Vera is the only thing that actually got me talking to real people."</p>
                        <p className="font-bold text-emerald-400">{name}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 py-40 border-y border-white/5 relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-end">
          <div className="p-8 rounded-3xl border border-white/10 bg-[#020617] h-full">
            <h3 className="text-xl font-bold text-white mb-4">Curious</h3>
            <div className="text-4xl font-black mb-6">$0</div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2"><Check className="text-slate-500" size={18}/> 5 Energy/day</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl border border-emerald-500/50 bg-gradient-to-b from-emerald-900/20 to-transparent relative overflow-hidden h-[105%]">
            <div className="absolute top-0 right-0 p-3 bg-emerald-500 text-[#020617] text-[10px] font-black uppercase tracking-widest">Best Value</div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Plus</h3>
            <div className="text-4xl font-black text-white mb-6">$4.99<span className="text-sm font-normal text-slate-400">/mo</span></div>
            <ul className="space-y-4 text-sm text-white">
              <li className="flex gap-2"><Check className="text-emerald-400" size={18}/> 15 Energy/day</li>
              <li className="flex gap-2"><Check className="text-emerald-400" size={18}/> Boss Scenarios</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl border border-white/10 bg-[#020617] h-full">
            <h3 className="text-xl font-bold text-violet-400 mb-4">Total Immersion</h3>
            <div className="text-4xl font-black text-white mb-6">$9.99<span className="text-sm font-normal text-slate-400">/mo</span></div>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2"><Check className="text-violet-400" size={18}/> Infinite Energy</li>
              <li className="flex gap-2"><Check className="text-violet-400" size={18}/> Premium Personas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Global Vote */}
      <section id="vote" className="scroll-mt-24 py-40 max-w-6xl mx-auto px-6 relative z-20">
        <div className="bg-slate-900/50 backdrop-blur-md rounded-[2rem] p-10 md:p-14 border border-white/10 flex flex-col md:flex-row gap-12 items-center shadow-2xl">
          <div className="flex-1">
            <Vote className="text-emerald-400 w-12 h-12 mb-6" />
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">{t.globalVote}</h3>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              We drop new dialects based entirely on community demand. Secure your free account to lock in your vote.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full">
            {/* 3. Fixed: Cleaned up the mapping function and removed broken code */}
            {pollCandidates.map((candidate) => (
              <button 
                key={candidate.key}
                onClick={() => {
                  if (onVote) onVote(candidate.key);
                  setAuthMode('signup');
                }}
                className="group relative p-6 bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl flex flex-col items-center justify-center text-center transition-all hover:bg-slate-900"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{candidate.flag}</span>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{candidate.name}</h3>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">
                  <Lock size={12} /> Log in to vote
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="border-t border-white/5 bg-[#020617] py-8 text-center text-slate-500 text-sm relative z-20">
        © {new Date().getFullYear()} Vera Worldwide. All rights reserved.
      </footer>

      {/* Auth Modal */}
      {authMode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020617]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl relative overflow-hidden">
            <button onClick={() => setAuthMode(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white"><X size={24}/></button>
            <div className="flex gap-6 mb-8 border-b border-white/10">
               <button onClick={() => setAuthMode('login')} className={`font-bold pb-4 border-b-2 transition-colors ${authMode === 'login' ? 'text-emerald-400 border-emerald-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>Log In</button>
               <button onClick={() => setAuthMode('signup')} className={`font-bold pb-4 border-b-2 transition-colors ${authMode === 'signup' ? 'text-emerald-400 border-emerald-400' : 'text-slate-500 border-transparent hover:text-slate-300'}`}>Sign Up</button>
            </div>
            <form onSubmit={handleManualAuth} className="flex flex-col gap-4">
               {authMode === 'signup' && (
                 <>
                   <input type="text" placeholder="Full Name" required className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
                   <input type="date" required className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-emerald-500 transition-colors [color-scheme:dark]" />
                 </>
               )}
               <input type="email" placeholder="Email Address" required className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
               <input type="password" placeholder="Password" required className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
               
               <button type="submit" className="w-full mt-2 py-3.5 rounded-xl bg-emerald-500 text-[#020617] font-black hover:bg-emerald-400 transition-colors">
                 {authMode === 'login' ? 'Enter Dashboard' : 'Create Account'}
               </button>

               {/* New Google Login Button */}
               <div className="relative flex items-center py-2">
                 <div className="flex-grow border-t border-white/10"></div>
                 <span className="flex-shrink-0 mx-4 text-slate-500 text-xs uppercase tracking-widest font-bold">Or</span>
                 <div className="flex-grow border-t border-white/10"></div>
               </div>
               
               <button type="button" onClick={handleGoogleLogin} className="w-full py-3.5 rounded-xl bg-white text-[#020617] font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                 <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                 Continue with Google
               </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}