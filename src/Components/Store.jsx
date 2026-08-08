import React, { useState } from 'react';
import { Crown, Hexagon, Zap, Flame, X, Check, Star, Loader2 } from 'lucide-react';

export default function Store({ setView, userProfile }) {
  const [loadingTier, setLoadingTier] = useState(null);
  const sparks = userProfile?.sparks || 0;
  const currentTier = userProfile?.tier || 'free';

  const handleCheckout = async (tier) => {
    setLoadingTier(tier);
    try {
      const response = await fetch('https://vera-worldwide-app.onrender.com/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier, userId: userProfile?.uid || 'local-user' })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirects the user securely to Stripe
      }
    } catch (err) {
      console.error("Checkout failed", err);
    }
    setLoadingTier(null);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans relative overflow-x-hidden pb-24">
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[150px] pointer-events-none" />

      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <button onClick={() => setView('dashboard')} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition text-slate-400 hover:text-white border border-white/5">
          <X size={20} />
        </button>
        <div className="flex items-center gap-2 bg-violet-950/30 border border-violet-900/50 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <Hexagon size={16} className="text-violet-400" />
          <span className="font-black text-white">{sparks} Sparks</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The Neural <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600">Marketplace</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">Upgrade your cognitive limits, unlock Boss Scenarios, and spend Sparks.</p>
        </div>

        <h2 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-6 flex items-center gap-2"><Crown size={16} /> Neural Link Upgrades</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* PLUS TIER */}
          <div className="bg-slate-900/80 border border-white/10 rounded-[2rem] p-8 flex flex-col relative overflow-hidden">
            <h3 className="text-2xl font-black text-white mb-2">Vera Plus</h3>
            <div className="text-4xl font-black text-emerald-400 mb-6">$4.99<span className="text-sm text-slate-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-300"><Check size={18} className="text-emerald-500"/> 15 Zaps per day</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><Check size={18} className="text-emerald-500"/> Boss Scenarios Unlocked</li>
            </ul>
            <button onClick={() => handleCheckout('plus')} disabled={currentTier !== 'free'} className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors disabled:opacity-50 flex justify-center items-center gap-2">
              {loadingTier === 'plus' ? <Loader2 className="animate-spin" size={20} /> : currentTier === 'plus' ? 'Current Plan' : 'Upgrade to Plus'}
            </button>
          </div>

          {/* PREMIUM TIER */}
          <div className="bg-gradient-to-b from-violet-900/40 to-slate-900 border border-violet-500/50 rounded-[2rem] p-8 flex flex-col relative shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">Total Immersion</div>
            <h3 className="text-2xl font-black text-white mb-2">Vera Premium</h3>
            <div className="text-4xl font-black text-violet-400 mb-6">$9.99<span className="text-sm text-slate-500 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white"><Check size={18} className="text-violet-400"/> INFINITE Zaps</li>
              <li className="flex items-center gap-3 text-sm text-white"><Check size={18} className="text-violet-400"/> Premium AI Personas</li>
            </ul>
            <button onClick={() => handleCheckout('premium')} disabled={currentTier === 'premium'} className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-black shadow-lg shadow-violet-900/50 hover:scale-[1.02] transition-transform disabled:opacity-50 flex justify-center items-center gap-2">
              {loadingTier === 'premium' ? <Loader2 className="animate-spin" size={20} /> : currentTier === 'premium' ? 'Current Plan' : 'Go Premium'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}