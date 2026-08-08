import React from 'react';
import { Gamepad2, Users, Trophy, X, Zap } from 'lucide-react';

export default function Arcade({ setView, userProfile }) {
  const isPremium = userProfile?.tier === 'premium';

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans relative overflow-hidden flex flex-col">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />

      <header className="p-6 relative z-10 flex justify-between items-center">
        <button onClick={() => setView('dashboard')} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition text-slate-400 hover:text-white">
          <X size={20} />
        </button>
        <div className="flex items-center gap-2 bg-rose-950/30 border border-rose-900/50 px-4 py-1.5 rounded-full">
          <Trophy size={16} className="text-rose-400" />
          <span className="font-black text-white text-sm uppercase tracking-widest">Rank: Bronze</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-6 relative z-10">
        <div className="text-center mb-12">
          <Gamepad2 className="w-16 h-16 text-rose-500 mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Vera Arcade</h1>
          <p className="text-slate-400 text-lg">Test your reflexes in high-speed conversational matchmaking.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group hover:border-rose-500/50 transition-all cursor-pointer">
            <h3 className="text-2xl font-black text-white mb-2">Rapid Fire</h3>
            <p className="text-slate-400 mb-6 text-sm">Survive as many conversational turns as possible without making a grammar mistake.</p>
            <button className="mt-auto w-full py-4 rounded-xl bg-slate-800 group-hover:bg-rose-600 text-white font-black transition-colors flex items-center justify-center gap-2">
              Play Match - 2 <Zap size={16} className="text-yellow-400"/>
            </button>
          </div>

          <div className={`bg-slate-900/60 border rounded-[2rem] p-8 flex flex-col relative overflow-hidden ${!isPremium ? 'border-white/5 opacity-70' : 'border-white/10 hover:border-violet-500/50 group cursor-pointer'}`}>
            {!isPremium && <div className="absolute top-0 right-0 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">Premium Only</div>}
            <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2"><Users size={24} /> 1v1 Debate</h3>
            <p className="text-slate-400 mb-6 text-sm">Debate an AI or a live opponent in your target dialect. Graded by the Neural Engine.</p>
            <button disabled={!isPremium} className="mt-auto w-full py-4 rounded-xl bg-slate-800 group-hover:bg-violet-600 text-white font-black transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed">
              {isPremium ? 'Find Opponent' : 'Unlock with Premium'}
        // Find your "Rapid Fire" button and replace it with this:
		<button 
  		onClick={() => {
    	// This triggers the onStartMatch prop we just added to App.jsx
    		if (setView && typeof onStartMatch !== 'undefined') {
       			onStartMatch({
        		id: 'a1',
         		title: "Arcade: Rapid Fire",
         		type: "rapid_fire",
         		focus: "Survive as many conversational turns as possible without dropping fluency.",
         		persona: "Speed Caller"
       });
    } else {
       setView('tutor'); 
    }
  }}
  className="mt-auto w-full py-4 rounded-xl bg-slate-800 group-hover:bg-rose-600 text-white font-black transition-colors flex items-center justify-center gap-2"
>
  Play Match - 2 <Zap size={16} className="text-yellow-400"/>
</button>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}