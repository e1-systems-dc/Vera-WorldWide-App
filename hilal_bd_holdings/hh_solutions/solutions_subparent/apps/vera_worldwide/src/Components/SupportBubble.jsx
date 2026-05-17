import React, { useState } from "react";
import { LifeBuoy, MessageCircle, X } from "./Icons";

export default function SupportBubble({ isOpen, toggle, t, isRtl, onSubmit }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    const trimmed = question.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setQuestion("");
    toggle();
  };

  return (
    <div className={`support-shell ${isRtl ? "rtl-support" : ""}`}>
      {isOpen && (
        <div className="support-panel">
          <div className="support-head">
            <div className="support-title">
              <LifeBuoy size={18} />
              <strong>{t.needHelp}</strong>
            </div>
            <button type="button" className="icon-button" onClick={toggle}>
              <X size={16} />
            </button>
          </div>

          <p className="support-copy">{t.supportDesc}</p>

          <textarea
            rows={5}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder={t.supportPlaceholder}
            className="support-textarea"
          />

          <button type="button" className="primary-button wide-button" onClick={handleSubmit}>
            {t.submitRequest}
          </button>
        </div>
      )}

      <button type="button" className="support-fab" onClick={toggle} aria-label={t.needHelp}>
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
