import React, { useState } from 'react';
import { mexico } from '../atlas/dialects/north-america/mexico';
import LessonActivity from './LessonActivity'; // Make sure this path is correct!

export default function LessonPath() {
  const dialectData = mexico;
  
  // State to handle which screen to show
  const [activeLesson, setActiveLesson] = useState(null);

  // Function to handle clicking a lesson
  const handleStartLesson = (lessonData, isBoss = false) => {
    // TODO: Later, we will add Firebase logic here to check if they have enough Zaps
    console.log(`Starting ${isBoss ? 'Boss Scenario' : 'Lesson'}:`, lessonData.title);
    
    // Set the active lesson, which swaps the view to the Chat
    setActiveLesson({
      ...lessonData,
      dialectId: dialectData.id,
      isBoss: isBoss
    });
  };

  // If a lesson is active, render the Chat Interface instead of the Map
  if (activeLesson) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
        <header className="p-4 border-b border-white/10 bg-white/5 backdrop-blur-md flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">{activeLesson.title}</h2>
            <p className="text-xs text-slate-400">Target: {activeLesson.focus || activeLesson.persona}</p>
          </div>
          <button 
            onClick={() => setActiveLesson(null)}
            className="px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-full text-sm font-bold tracking-wider transition-colors"
          >
            FLEE (End Session)
          </button>
        </header>
        
        {/* Pass the scenario prompt into your Chat Component */}
        <LessonActivity 
          language={dialectData.dialect} 
          sessionMode={activeLesson.isBoss ? "boss" : "standard"} 
          practiceMode={activeLesson.scenarioPrompt || activeLesson.systemPrompt} 
        />
      </div>
    );
  }

  // --- STANDARD MAP VIEW RENDERING ---
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans p-6 md:p-12 relative">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto space-y-32 py-12 relative z-10">
        
        <header className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-2xl">
            <span className="text-6xl">{dialectData.flag}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            {dialectData.dialect}
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Master the streets, not just the textbook. High-stakes roleplay powered by the Neural Engine.
          </p>
        </header>

        <div className="space-y-32">
          {dialectData.modules.map((mod, index) => (
            <section key={mod.id} className="space-y-10 relative">
              
              <div className="space-y-3 border-b border-white/10 pb-6">
                <p className="uppercase tracking-widest text-[11px] font-bold text-cyan-500">
                  Phase 0{index + 1}
                </p>
                <h2 className="text-3xl font-semibold text-white">{mod.title}</h2>
                <p className="text-slate-400">{mod.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mod.lessons.map((lesson) => (
                  <button 
                    key={lesson.id}
                    onClick={() => handleStartLesson(lesson, false)} // <--- CLICK HANDLER ADDED
                    className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300 text-left overflow-hidden cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="font-semibold text-xl text-white mb-2">{lesson.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{lesson.focus}</p>
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1 text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-full">
                        ⚡ {lesson.energyCost} Zap
                      </span>
                      <span className="flex items-center gap-1 text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-full">
                        ✨ {lesson.rewardSparks} Sparks
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => handleStartLesson(mod.bossScenario, true)} // <--- CLICK HANDLER ADDED
                  className="w-full group relative p-[2px] rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all duration-500 cursor-pointer"
                >
                  <div className="bg-[#020617] rounded-[22px] p-6 md:p-8 text-left relative overflow-hidden backdrop-blur-xl">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                      <div>
                        <span className="uppercase tracking-widest text-[11px] font-bold text-emerald-400 mb-3 block flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Boss Scenario
                        </span>
                        <h3 className="font-bold text-2xl text-white mb-1">{mod.bossScenario.title}</h3>
                        <p className="text-sm text-slate-400">Persona: <span className="text-slate-300">{mod.bossScenario.persona}</span></p>
                      </div>
                      <div className="flex gap-3 text-sm font-bold uppercase tracking-wider shrink-0">
                        <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full">
                          ⚡ {mod.bossScenario.energyCost} Zaps
                        </span>
                        <span className="flex items-center gap-1 text-violet-400 bg-violet-500/10 px-4 py-2 rounded-full">
                          ✨ {mod.bossScenario.rewardSparks} Sparks
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

            </section>
          ))}
        </div>
      </div>
    </div>
  );
}