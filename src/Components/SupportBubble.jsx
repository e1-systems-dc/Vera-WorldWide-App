const SupportBubble = ({ isOpen, toggle, t, isRtl, onSubmitTicket }) => {
  const [question, setQuestion] = useState("");
  return (
    <div className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-[200]`}>
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 w-80 mb-4 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
            <h4 className="font-black text-slate-800 tracking-tight flex items-center gap-2">
              <LifeBuoy size={18} className="text-emerald-500" /> {t.needHelp}
            </h4>
            <button onClick={toggle} className="text-slate-400 hover:text-slate-600 transition-colors"><X size={18} /></button>
          </div>
          <p className="text-xs text-slate-500 mb-3 font-medium">{t.supportDesc}</p>
          <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none font-medium text-slate-700" rows={4} placeholder={t.supportPlaceholder} value={question} onChange={e => setQuestion(e.target.value)} />
          <button onClick={() => { if(!question.trim()) return; onSubmitTicket(question); setQuestion(""); toggle(); }} className="mt-4 w-full bg-slate-900 text-white font-black py-3 rounded-xl hover:bg-emerald-600 transition-colors text-sm">
            {t.submitRequest}
          </button>
        </div>
      )}
      <button onClick={toggle} className={`w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 ${isRtl ? 'float-left' : 'float-right'}`}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};