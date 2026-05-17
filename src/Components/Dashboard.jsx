import React from "react";

import { CONTENT, activeLanguages } from "../data";

const practiceModes = [
  {
    id: "conversation",
    title: "Conversation",
    description: "Open-ended dialogue for real speaking rhythm and quick corrections.",
  },
  {
    id: "drill",
    title: "Quick Drill",
    description: "Short-response repetition for speed, confidence, and recall.",
  },
  {
    id: "roleplay",
    title: "Roleplay",
    description: "Situational practice for greetings, travel, work, and daily life.",
  },
];

export default function Dashboard({
  t,
  profile,
  progress,
  selectedLanguageKey,
  setSelectedLanguageKey,
  sessionMode,
  setSessionMode,
  onStartPractice,
  onBack,
}) {
  const liveLanguages = activeLanguages.map((key) => ({
    key,
    ...CONTENT[key],
  }));

  return (
    <section className="panel dashboard-shell">
      <header className="panel-header">
        <div>
          <p className="eyebrow">{t.dashboardEyebrow}</p>
          <h1 className="panel-title">
            {t.dashboardGreeting} {profile.name}
          </h1>
        </div>
        <div className="panel-header-group">
          <button type="button" className="ghost-button" onClick={onBack}>
            {t.backToHome}
          </button>
          <button
            type="button"
            className={`ghost-button ${sessionMode === "lean" ? "mode-active" : ""}`}
            onClick={() =>
              setSessionMode((current) => (current === "lean" ? "guided" : "lean"))
            }
          >
            {sessionMode === "lean" ? t.leanModeLabel : t.guidedModeLabel}
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="stats-grid">
          <article className="stat-card">
            <span className="stat-label">{t.streakLabel}</span>
            <strong>{progress.streakDays}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">{t.sessionsLabel}</span>
            <strong>{progress.totalSessions}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">{t.xpLabel}</span>
            <strong>{progress.xp}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">{t.dailyGoalLabel}</span>
            <strong>{profile.dailyGoal}</strong>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="admin-card">
            <h2>{t.currentTrackTitle}</h2>
            <p className="dashboard-copy">{t.currentTrackCopy}</p>
            <div className="dashboard-language-list">
              {liveLanguages.map((language) => (
                <button
                  key={language.key}
                  type="button"
                  className={`language-option ${selectedLanguageKey === language.key ? "is-selected" : ""}`}
                  onClick={() => setSelectedLanguageKey(language.key)}
                >
                  <span>{language.flag}</span>
                  <div>
                    <strong>{language.name}</strong>
                    <p>{language.dialect}</p>
                  </div>
                </button>
              ))}
            </div>
          </article>

          <article className="admin-card">
            <h2>{t.practiceModesTitle}</h2>
            <p className="dashboard-copy">{t.practiceModesCopy}</p>
            <div className="practice-grid">
              {practiceModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  className="practice-card"
                  onClick={() => onStartPractice(mode.id)}
                >
                  <strong>{mode.title}</strong>
                  <p>{mode.description}</p>
                </button>
              ))}
            </div>
          </article>

          <article className="admin-card">
            <h2>{t.profileTitle}</h2>
            <div className="stack-list">
              <div className="record-card">
                <div className="record-head">
                  <strong>{profile.name}</strong>
                  <span>{profile.level}</span>
                </div>
                <p>
                  <span>{t.learningReasonLabel}</span> {profile.reason}
                </p>
              </div>
              <div className="record-card">
                <div className="record-head">
                  <strong>{t.planTitle}</strong>
                  <span>{profile.dailyGoal}</span>
                </div>
                <p>{t.planCopy}</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}
