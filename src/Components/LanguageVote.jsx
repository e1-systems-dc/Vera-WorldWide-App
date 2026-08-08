import { useState } from "react";
import "../animations.css";

export default function LanguageVote({ options, onConfirm }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(option) {
    if (submitted) return;
    setSelected(option);
  }

  function handleConfirm() {
    if (!selected) return;
    onConfirm(selected);
    setSubmitted(true);
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#E5E2D8] max-w-md mx-auto mt-4 fade-in">
      <h2 className="text-lg font-semibold text-[#112018] mb-2">
        Vote for the next language drop
      </h2>
      <p className="text-sm text-[#4A5A52] mb-4">
        Choose one language (including its dialect set) you want to see next.
      </p>

      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt)}
            className={`w-full text-left px-4 py-3 rounded-xl border shadow-sm text-sm fade-in btn-press ${
              selected?.id === opt.id
                ? "border-emerald-600 bg-[#E6F4EF]"
                : "border-[#DAD6CC] bg-[#FAF9F6]"
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#112018]">
                {opt.label}
              </span>
              <span className="text-lg">{opt.flag}</span>
            </div>
            <p className="text-xs text-[#4A5A52] mt-1">
              {opt.description}
            </p>
          </button>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        disabled={!selected || submitted}
        className={`w-full mt-4 px-4 py-2 rounded-lg shadow-sm text-white btn-press ${
          !selected || submitted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-emerald-600"
        }`}
      >
        {submitted ? "Vote submitted ✅" : "Confirm vote"}
      </button>
    </div>
  );
}
