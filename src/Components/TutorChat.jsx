import React, { useState, useEffect, useRef } from 'react';
import { Mic, Send, X, Activity, Volume2, Loader2, ShieldAlert, AlertCircle } from 'lucide-react';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ROOT_PATH = "artifacts/vera-worldwide-v1";

export default function TutorChat({ setView, userProfile, lesson }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [sessionScore, setSessionScore] = useState(100);
  
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const audioRef = useRef(null);

  const dialect = userProfile?.dialectName || 'Mexican Spanish';
  const level = userProfile?.cefrLevel || 'A1';
  const isBoss = lesson?.type === 'boss';

  // INITIALIZE SPEECH-TO-TEXT
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true; 
      
      if (dialect.includes('Spanish')) recognitionRef.current.lang = 'es-MX';
      else if (dialect.includes('Arabic')) recognitionRef.current.lang = 'ar-SA';
      else if (dialect.includes('Japanese')) recognitionRef.current.lang = 'ja-JP';
      else recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) finalTranscript += transcript;
          else interimTranscript += transcript;
        }
        setInputText(prev => finalTranscript || interimTranscript || prev);
      };

      recognitionRef.current.onerror = () => setIsRecording(false);
      recognitionRef.current.onend = () => setIsRecording(false);
    }
  }, [dialect]);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      setInputText('');
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  // NEURAL TEXT-TO-SPEECH
  const playTTS = async (text) => {
    if (isPlayingAudio) return;
    setIsPlayingAudio(true);
    
    try {
      const voiceId = isBoss ? 'onyx' : 'nova'; 
      const response = await fetch('https://vera-worldwide-app.onrender.com/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, voiceId })
      });
      
      if (!response.ok) throw new Error("Voice engine failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      if (audioRef.current) audioRef.current.pause();
      
      audioRef.current = new Audio(url);
      audioRef.current.onended = () => setIsPlayingAudio(false);
      audioRef.current.play();

    } catch (error) {
      console.error('Neural TTS Error:', error);
      const utterance = new SpeechSynthesisUtterance(text);
      if (dialect.includes('Spanish')) utterance.lang = 'es-MX';
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  useEffect(() => {
    const greeting = isBoss 
      ? `[SYSTEM: BOSS SCENARIO INITIATED]\nPersona: ${lesson?.persona}\nGoal: ${lesson?.focus}\n\n"¿Qué pasa? Necesito ver sus documentos ahora mismo."` 
      : `Welcome to your neural pathway. I'm Vera. We are practicing: ${lesson?.title}. Whenever you're ready, just say hello!`;
    
    setMessages([{ role: 'ai', content: greeting, analysis: null }]);
  }, [lesson, isBoss]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    const newMsg = { role: 'user', content: userMsgText };
    
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsThinking(true);

    try {
const response = await fetch('https://vera-worldwide-app.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userProfile?.uid || "local-user",
          userMessage: userMsgText,
          targetDialect: dialect,
          userCefrLevel: level,
          scenario: isBoss ? 'boss' : 'standard_lesson',
          chatHistory: messages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      
      if (data.success && data.data) {
        const aiText = data.data.aiResponse;
        const analysis = data.data.analysis;

        setMessages(prev => {
          const updatedHistory = [...prev];
          updatedHistory[updatedHistory.length - 1].analysis = analysis;
          updatedHistory.push({ role: 'ai', content: aiText, analysis: null });
          return updatedHistory;
        });

        playTTS(aiText);

        if (analysis?.fluencyScore) {
          setSessionScore(prev => Math.round((prev * 0.7) + (analysis.fluencyScore * 0.3)));
        }
      } else {
        throw new Error("Backend compilation failed.");
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "SYSTEM ERROR: Connection to Neural Engine lost.", analysis: null }]);
    } finally {
      setIsThinking(false);
    }
  };

  // REWARD SYSTEM
  const finishMission = async () => {
    setIsThinking(true);
    try {
      const auth = getAuth();
      const db = getFirestore();
      const sparksEarned = isBoss ? 250 : 50;
      
      if (auth.currentUser) {
        await updateDoc(doc(db, `${ROOT_PATH}/users`, auth.currentUser.uid), {
          sparks: increment(sparksEarned),
          streak: increment(1)
        });
        window.location.reload(); 
      }
    } catch (err) {
      console.error("Reward error", err);
    }
    setView('dashboard');
  };

  return (
    <div className="flex flex-col h-screen bg-[#020617] text-slate-200 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20 ${isBoss ? 'bg-rose-600' : 'bg-cyan-600'}`} />

      {/* HEADER */}
      <header className="flex items-center justify-between p-4 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md relative z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => {
            if (audioRef.current) audioRef.current.pause();
            setView('dashboard');
          }} className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 transition text-slate-400 hover:text-white border border-white/5">
            <X size={20} />
          </button>
          <div>
            <h2 className="font-black text-white text-lg flex items-center gap-2 tracking-tight">
              {isBoss && <ShieldAlert size={18} className="text-rose-500" />}
              {lesson?.title || 'Sandbox Mode'}
            </h2>
            <p className={`text-[10px] font-bold uppercase tracking-widest ${isBoss ? 'text-rose-500' : 'text-cyan-400'}`}>
              {isBoss ? 'High-Stakes Boss Encounter' : 'Supportive Learning Environment'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/80 px-4 py-2 rounded-2xl border border-white/5 shadow-inner">
          <Activity size={16} className={sessionScore >= 80 ? 'text-emerald-400' : sessionScore >= 50 ? 'text-amber-400' : 'text-rose-500'} />
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold leading-none mb-0.5">Fluency</span>
            <span className="text-sm font-black text-white leading-none">{sessionScore}%</span>
          </div>
        </div>
      </header>

      {/* CHAT HISTORY */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 relative z-10 scroll-smooth pb-32">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            
            <div className={`max-w-[85%] md:max-w-[70%] rounded-3xl p-5 ${
              msg.role === 'user' 
                ? 'bg-slate-800 text-white rounded-br-sm shadow-md' 
                : isBoss 
                  ? 'bg-gradient-to-br from-rose-950/80 to-slate-900 border border-rose-900/50 text-slate-200 rounded-bl-sm shadow-[0_0_30px_rgba(225,29,72,0.1)]'
                  : 'bg-gradient-to-br from-cyan-950/80 to-slate-900 border border-cyan-900/50 text-slate-200 rounded-bl-sm shadow-[0_0_30px_rgba(6,182,212,0.05)]'
            }`}>
              <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{msg.content}</p>
              
              {msg.role === 'ai' && !msg.content.includes('SYSTEM ERROR') && (
                <button 
                  onClick={() => playTTS(msg.content)} 
                  disabled={isPlayingAudio}
                  className="mt-4 text-slate-500 hover:text-cyan-400 disabled:opacity-50 transition-colors flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest"
                >
                  <Volume2 size={14} className={isPlayingAudio ? "animate-pulse text-cyan-400" : ""} /> 
                  {isPlayingAudio ? "Speaking..." : "Play Audio"}
                </button>
              )}
            </div>

            {/* Supportive Feedback Toast */}
            {msg.role === 'user' && msg.analysis && msg.analysis.grammarGaps?.length > 0 && (
              <div className="mt-2 max-w-[80%] md:max-w-[60%] mr-2 p-3 rounded-2xl bg-amber-950/30 border border-amber-900/50 text-left animate-in slide-in-from-top-2">
                <div className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-1">Friendly Correction</span>
                    <p className="text-xs text-amber-200/80 leading-relaxed">{msg.analysis.adaptiveHint}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {isThinking && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-white/10 rounded-3xl rounded-bl-sm p-4 flex items-center gap-3 shadow-lg">
              <Loader2 size={16} className="text-cyan-400 animate-spin" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Vera is typing...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </main>

      {/* INPUT AREA & REWARD BUTTON */}
      <footer className="p-4 bg-[#020617] border-t border-white/10 relative z-10 pb-8 md:pb-6 flex flex-col gap-4">
        
        {messages.length > 2 && (
          <div className="flex justify-center w-full max-w-4xl mx-auto">
             <button onClick={finishMission} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors">
               Finish Lesson & Claim Reward
             </button>
          </div>
        )}

        <form onSubmit={sendMessage} className="max-w-4xl mx-auto w-full flex items-end gap-3">
          <button 
            type="button"
            onClick={toggleRecording}
            className={`p-4 rounded-2xl transition-all shrink-0 border ${
              isRecording 
                ? 'bg-rose-500 border-rose-400 text-white animate-pulse shadow-[0_0_25px_rgba(244,63,94,0.4)]' 
                : 'bg-slate-900 border-white/10 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Mic size={22} fill={isRecording ? "currentColor" : "none"} />
          </button>

          <div className="flex-1 bg-slate-900 border border-white/10 rounded-2xl flex items-center focus-within:border-cyan-500/50 focus-within:bg-slate-800/80 transition-all shadow-inner">
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder={isRecording ? "Listening..." : "Type or speak to Vera..."}
              className="w-full bg-transparent text-white px-5 py-4 focus:outline-none resize-none min-h-[56px] max-h-[120px] text-base placeholder:text-slate-600"
              rows="1"
            />
            <button 
              type="submit" 
              disabled={!inputText.trim() || isThinking}
              className="p-3 mr-2 text-cyan-400 hover:text-cyan-300 disabled:opacity-20 transition-all disabled:scale-95 hover:scale-110"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}