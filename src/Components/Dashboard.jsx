import React, { useState } from 'react';
import { Flame, Zap, Hexagon, Play, Lock, Crown, ShieldAlert, Map, Settings, RefreshCw, Globe, BookOpen, Gamepad2 } from 'lucide-react';
import LessonPath from './LessonPath'; 

export default function Dashboard({ setView, userProfile, onSelectLesson }) {
  
  const [showSettings, setShowSettings] = useState(false);
  const sparks = userProfile?.sparks || 0;
  const energy = userProfile?.energy || 5;
  const streak = userProfile?.streak || 0;
  const tier = userProfile?.tier || 'free';
  const dialect = userProfile?.dialectName || 'Mexican Spanish';
  const level = userProfile?.cefrLevel || 'A1';

  // --- DYNAMIC MULTI-MODULE SYLLABUS ENGINE ---
  const getSyllabus = (targetDialect) => {
    const regionMap = {
      "Moroccan Darija": { region: "Morocco", boss: "The Carpet Vendor", focus: "Medina navigation and haggling." },
      "Colombian Spanish": { region: "Bogot", boss: "The Lost Luggage", focus: "Airport navigation and TransMilenio." },
      "Tokyo Japanese": { region: "Tokyo", boss: "The Train Conductor", focus: "Subway navigation and politeness levels." }
    };
    
    const context = regionMap[targetDialect] || { region: targetDialect.split(' ')[0], boss: "The Customs Agent", focus: "Airport navigation and immigration." };

    return [
      {
        number: 1, 
        title: `The ${context.region} Arrival`, 
        focus: context.focus,
        lessons: [
          { id: 'l1', title: "Hailing a Ride", focus: "Greetings and confirming destinations.", type: "standard", cost: 1, status: 'completed' },
          { id: 'l2', title: "Ordering Local Food", focus: "Politeness, modifiers, and requests.", type: "standard", cost: 1, status: 'unlocked' },
          { id: 'l3', title: "Exchanging Currency", focus: "Rates, counting money, and avoiding scams.", type: "standard", cost: 1, status: 'locked' }
        ],
        boss: { id: 'b1', title: context.boss, persona: "Local Authority", focus: "Navigate a strict, high-pressure scenario.", type: "boss", cost: 3, status: 'locked' }
      },
      {
        number: 2, 
        title: "The Streets", 
        focus: `Maps markets, street food, and directions in ${targetDialect}.`,
        lessons: [
          { id: 'l4', title: "Buying Street Food", focus: "Quantities, ingredients, spice levels.", type: "standard", cost: 1, status: 'locked' },
          { id: 'l5', title: "Asking for Directions", focus: "Imperatives and spatial directions.", type: "standard", cost: 1, status: 'locked' }
        ],
        boss: { id: 'b2', title: "The Aggressive Vendor", persona: "Pushy Market Vendor", focus: "Negotiate a fair price without offending them.", type: "boss", cost: 3, status: 'locked' }
      }
    ];
  };

  const modules = getSyllabus(dialect);

  const handleLessonClick = (lesson) => {
    if (lesson.status === 'locked') return;
    if (onSelectLesson) onSelectLesson(lesson);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden pb-32 relative">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-[100] bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 px-4 md:px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center relative">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              {level}
            </div>
            <div className="hidden sm:block">
              <h2 className="text-sm font-bold text-white leading-tight">{dialect}</h2>
              <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Target Locked</p>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center bg-slate-900/80 p-1.5 md:p-2 rounded-2xl border border-white/10 shadow-inner">
              <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 border-r border-white/10">
                <Flame size={16} className={streak > 0 ? "text-rose-500" : "text-slate-600"} />
                <span className="font-bold text-xs md:text-sm text-white">{streak}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 border-r border-white/10">
                <Zap size={16} className="text-emerald-400" />
                <span className="font-bold text-xs md:text-sm text-white">{energy}</span>
              </div>
              <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3">
                <Hexagon size={16} className="text-violet-400" />
                <span className="font-bold text-xs md:text-sm text-white">{sparks}</span>
              </div>
            </div>
            
            {tier === 'free' && (
              <button onClick={() => setView('store')} className="flex items-center gap-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:scale-105 text-white px-3 md:px-4 py-2 rounded-xl text-xs font-black shadow-lg shadow-violet-900/30 transition-all cursor-pointer">
                <Crown size={14} /> <span className="hidden sm:block">UPGRADE</span>
              </button>
            )}

            <button onClick={() => setShowSettings(!showSettings)} className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-white/10 transition-colors cursor-pointer">
              <Settings size={20} />
            </button>
          </div>

          {/* Settings Dropdown */}
          {showSettings && (
            <div className="absolute right-0 top-14 w-64 bg-slate-900 border border-white/10 rounded-2xl p-3 shadow-2xl z-[150] flex flex-col gap-1">
              <button onClick={() => { setShowSettings(false); setView('language_picker'); }} className="flex items-center gap-3 text-sm font-bold text-slate-300 hover:text-white p-3 hover:bg-slate-800 rounded-xl transition-colors text-left cursor-pointer"><Globe size={16} className="text-cyan-400" /> Change Dialect</button>
              <button onClick={() => { setShowSettings(false); setView('placement_quiz'); }} className="flex items-center gap-3 text-sm font-bold text-slate-300 hover:text-white p-3 hover:bg-slate-800 rounded-xl transition-colors text-left cursor-pointer"><RefreshCw size={16} className="text-emerald-400" /> Retake Placement Quiz</button>
              <button onClick={() => { setShowSettings(false); setView('store'); }} className="flex items-center gap-3 text-sm font-bold text-slate-300 hover:text-white p-3 hover:bg-slate-800 rounded-xl transition-colors text-left cursor-pointer"><Crown size={16} className="text-violet-400" /> Vera Store</button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content: Mapping through ALL Modules */}
      <main className="max-w-3xl mx-auto px-6 pt-12 relative z-10 space-y-20">
        
        {modules.map((module) => (
          <div key={module.number} className="module-container">
            {/* Module Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 bg-emerald-950/30 px-3 py-1 rounded-md border border-emerald-900/50">
                <Map size={14} /> Module {module.number}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">{module.title}</h1>
              <p className="text-slate-400 text-base">{module.focus}</p>
            </div>

            {/* Lesson Path */}
            <div className="space-y-4 mb-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-slate-800/50 -z-10" />

              {module.lessons.map((lesson) => (
                <div 
                  key={lesson.id} 
                  onClick={() => handleLessonClick(lesson)} 
                  className={`relative flex items-center p-5 rounded-3xl border transition-all ${
                    lesson.status === 'locked' 
                      ? 'bg-slate-900/30 border-slate-800/50 opacity-50 cursor-not-allowed' 
                      : lesson.status === 'unlocked' 
                        ? 'bg-slate-900 border-emerald-500/40 hover:border-emerald-500 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                        : 'bg-emerald-950/20 border-emerald-500/20 cursor-pointer hover:bg-emerald-900/30'
                  }`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center mr-6 border ${
                    lesson.status === 'locked' ? 'bg-slate-900 border-slate-800 text-slate-600' : 
                    lesson.status === 'completed' ? 'bg-emerald-500 border-emerald-400 text-[#020617]' : 
                    'bg-emerald-950 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  }`}>
                    {lesson.status === 'locked' ? <Lock size={20} /> : <Play size={20} className={lesson.status === 'completed' ? "" : "ml-1"} fill="currentColor" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-3">
                      {lesson.title} 
                      {lesson.status !== 'locked' && <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">- {lesson.cost} Zap</span>}
                    </h3>
                    <p className="text-sm text-slate-400">{lesson.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Boss Scenario */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-rose-500/20 to-transparent">
              <div 
                onClick={() => handleLessonClick(module.boss)} 
                className={`bg-[#0a0505] border rounded-[1.4rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 transition-all ${
                  module.boss.status === 'locked' 
                    ? 'border-rose-900/30 opacity-60 cursor-not-allowed' 
                    : 'border-rose-600/50 cursor-pointer hover:border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.1)]'
                }`}
              >
                <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center shadow-lg relative ${
                  module.boss.status === 'locked' 
                    ? 'bg-slate-900 border border-slate-800' 
                    : 'bg-gradient-to-tr from-rose-600 to-orange-500 shadow-rose-900/50'
                }`}>
                  <ShieldAlert size={32} className={module.boss.status === 'locked' ? "text-slate-600" : "text-white"} />
                  {module.boss.status === 'locked' && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center">
                      <Lock size={14} className="text-rose-900" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-black text-rose-500 mb-2 bg-rose-950/30 px-3 py-1 rounded-md">
                    Boss Scenario <span className="text-slate-600 mx-1">|</span> - {module.boss.cost} Zaps
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{module.boss.title}</h3>
                  <p className="text-slate-400 text-sm">Persona: <span className="text-slate-200 font-medium">{module.boss.persona}</span>  {module.boss.focus}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

		    {/* Floating Bottom Nav */}
            <div>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-full flex items-center gap-8 shadow-2xl z-50">
                <button onClick={() => setView('lesson_path')} className="text-cyan-400 flex flex-col items-center gap-1">
    				<Map size={24} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Learn</span>
                   </button>
                   <button onClick={() => setView('arcade')} className="text-slate-500 hover:text-cyan-400 transition flex flex-col items-center gap-1">
                    <Gamepad2 size={24} /><span className="text-[10px] font-bold uppercase tracking-widest">Arcade</span>
                   </button>
                   <button onClick={() => setView('vocab')} className="text-slate-500 hover:text-cyan-400 transition flex flex-col items-center gap-1">
                    <BookOpen size={24} /><span className="text-[10px] font-bold uppercase tracking-widest">Vault</span>
                   </button>
        	</div>
        </div>
    </div>
	);
}