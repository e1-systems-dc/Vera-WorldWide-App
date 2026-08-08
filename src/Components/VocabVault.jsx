import React, { useState } from 'react';
import { BookOpen, Search, Volume2, X, BrainCircuit, Flame } from 'lucide-react';

export default function VocabVault({ setView, userProfile }) {
  const [searchQuery, setSearchQuery] = useState('');
  const dialect = userProfile?.dialectName || 'Target Language';

  // In production, this pulls from userProfile.savedVocab array populated by the AI
  const savedItems = [
    { word: "Me gustaría", translation: "I would like", context: "Polite ordering. Better than 'Yo quiero'.", type: "grammar" },
    { word: "Sin azúcar", translation: "Without sugar", context: "Used during the Coffee Shop lesson.", type: "vocab" },
    { word: "No te hagas pato", translation: "Don't play dumb", context: "Mexican slang. Used by Boss 1.", type: "slang" }
  ];

  const filteredItems = savedItems.filter(item => 
    item.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const playTTS = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (dialect.includes('Spanish')) utterance.lang = 'es-MX';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans relative overflow-x-hidden pb-32">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <button onClick={() => setView('dashboard')} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition text-slate-400 hover:text-white border border-white/5">
          <X size={20} />
        </button>
        <div className="flex items-center gap-2 bg-cyan-950/30 border border-cyan-900/50 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <BrainCircuit size={16} className="text-cyan-400" />
          <span className="font-black text-white text-sm uppercase tracking-widest">Neural Memory</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 flex items-center justify-center md:justify-start gap-4">
            <BookOpen className="text-cyan-400" size={40} /> Vocab Vault
          </h1>
          <p className="text-slate-400 text-base">Review your linguistic gaps, saved slang, and corrections from the AI Tutor.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search your neural memory..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors shadow-inner"
          />
        </div>

        {/* Saved Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, i) => (
            <div key={i} className="bg-slate-900/60 border border-white/5 p-6 rounded-3xl hover:border-cyan-500/30 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-3 inline-block ${
                    item.type === 'slang' ? 'bg-rose-950/50 text-rose-400 border border-rose-900/50' : 
                    item.type === 'grammar' ? 'bg-amber-950/50 text-amber-400 border border-amber-900/50' : 
                    'bg-cyan-950/50 text-cyan-400 border border-cyan-900/50'
                  }`}>
                    {item.type}
                  </span>
                  <h3 className="text-2xl font-black text-white">{item.word}</h3>
                  <p className="text-cyan-400 font-bold text-sm mt-1">{item.translation}</p>
                </div>
                <button onClick={() => playTTS(item.word)} className="p-3 bg-slate-800 rounded-xl text-slate-400 group-hover:text-cyan-400 group-hover:bg-slate-700 transition-all">
                  <Volume2 size={20} />
                </button>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">
                <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest block mb-1">Context</span>
                {item.context}
              </p>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-500 border border-white/5 rounded-3xl border-dashed">
              No memories found matching "{searchQuery}".
            </div>
          )}
        </div>
      </main>
    </div>
  );
}