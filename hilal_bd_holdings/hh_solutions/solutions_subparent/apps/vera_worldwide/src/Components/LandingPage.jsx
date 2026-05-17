import React, { useEffect, useMemo, useState } from "react";

import { CONTENT, activeLanguages, pollCandidates } from "../data";
import { LayoutDashboard, Search, Star, Vote } from "./Icons";

export default function LandingPage({
  t,
  uiLang,
  setUiLang,
  setView,
  isRtl,
  selectedLanguageKey,
  onSelectLanguage,
  sessionMode,
  setSessionMode,
  onVote,
  voteCounts,
  totalVotes,
  toggleSupport,
  hasProfile,
  openDashboard,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(t.allRegions);

  useEffect(() => {
    setActiveTab(t.allRegions);
  }, [t.allRegions]);

  const allLanguageKeys = useMemo(() => Object.keys(CONTENT), []);

  const regionTabs = useMemo(
    () => [
      t.allRegions,
      t.learnNow,
      t.comingSoonTab,
      ...new Set(allLanguageKeys.map((key) => CONTENT[key].continent)),
    ],
    [allLanguageKeys, t.allRegions, t.learnNow, t.comingSoonTab],
  );

  const filteredLanguages = allLanguageKeys.filter((key) => {
    const language = CONTENT[key];
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      language.name.toLowerCase().includes(query) ||
      language.dialect.toLowerCase().includes(query) ||
      language.continent.toLowerCase().includes(query);

    let matchesTab = false;
    if (activeTab === t.allRegions) matchesTab = true;
    else if (activeTab === t.learnNow) matchesTab = activeLanguages.includes(key);
    else if (activeTab === t.comingSoonTab) matchesTab = !activeLanguages.includes(key);
    else matchesTab = language.continent === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <main className="landing-shell">
      <section className="hero-card">
        <nav className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark">V</div>
            <div>
              <p className="eyebrow">{t.heroTag}</p>
              <h1>{t.appName}</h1>
            </div>
          </div>

          <div className="topbar-actions">
            <select
              value={uiLang}
              onChange={(event) => setUiLang(event.target.value)}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="hi">हिन्दी</option>
              <option value="es">Español</option>
              <option value="ar">العربية</option>
              <option value="fr">Français</option>
              <option value="bn">বাংলা</option>
              <option value="pt">Português</option>
              <option value="ru">Русский</option>
              <option value="ur">اردو</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="de">Deutsch</option>
              <option value="sw">Kiswahili</option>
            </select>

            <button
              type="button"
              className="ghost-button"
              onClick={() => setView("admin")}
            >
              <LayoutDashboard size={16} />
              <span>{t.adminPortal}</span>
            </button>
          </div>
        </nav>

        <section className="hero-layout">
          <div className="hero-copy">
            <div className="pill">
              <Star size={14} />
              <span>{t.heroTag}</span>
            </div>
            <h2>
              {t.heroTitleLine1}
              <span>{t.heroTitleLine2}</span>
            </h2>
            <p>{t.heroSubtitle}</p>
            <div className="hero-actions">
              <button
                type="button"
                className="primary-button"
                onClick={() =>
                  hasProfile ? openDashboard() : onSelectLanguage(selectedLanguageKey)
                }
              >
                {hasProfile ? t.openDashboardLabel : t.startJourney}
              </button>
              <button type="button" className="secondary-button" onClick={toggleSupport}>
                {t.requestDialect}
              </button>
              <button
                type="button"
                className={`ghost-button ${sessionMode === "lean" ? "mode-active" : ""}`}
                onClick={() =>
                  setSessionMode((current) => (current === "lean" ? "guided" : "lean"))
                }
              >
                {sessionMode === "lean" ? t.switchToGuided : t.switchToLean}
              </button>
            </div>
          </div>

          <div className="hero-highlight">
            <p className="eyebrow">{t.featuredLanguage}</p>
            <div className="feature-flag">{CONTENT[selectedLanguageKey].flag}</div>
            <h3>{CONTENT[selectedLanguageKey].name}</h3>
            <p>{CONTENT[selectedLanguageKey].dialect}</p>
            <button
              type="button"
              className="ghost-button wide-button"
              onClick={() => onSelectLanguage(selectedLanguageKey)}
            >
              {t.tryThisDialect}
            </button>
          </div>
        </section>
      </section>

      <section className="catalog-shell">
        <div className="catalog-head">
          <div>
            <p className="eyebrow">{t.exploreDialects}</p>
            <h3>{t.languageLibraryTitle}</h3>
          </div>
          <label className="search-shell">
            <Search size={18} />
            <input
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                if (event.target.value && activeTab !== t.allRegions) {
                  setActiveTab(t.allRegions);
                }
              }}
              placeholder={t.searchPlaceholder}
            />
          </label>
        </div>

        <div className="tab-row">
          {regionTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-button ${tab === activeTab ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {filteredLanguages.length === 0 ? (
          <div className="empty-block">{t.noDialects}</div>
        ) : (
          <div className="language-grid">
            {filteredLanguages.map((key) => {
              const language = CONTENT[key];
              const isActive = activeLanguages.includes(key);
              const isSelected = selectedLanguageKey === key;

              return (
                <article
                  key={key}
                  className={`language-card ${isActive ? "is-live" : "is-soon"} ${isSelected ? "is-selected" : ""}`}
                >
                  <div className="language-card-top">
                    <span className="language-flag">{language.flag}</span>
                    <span className={`status-chip ${isActive ? "live-chip" : "soon-chip"}`}>
                      {isActive ? t.learnNow : t.comingSoonTab}
                    </span>
                  </div>
                  <h4>{language.name}</h4>
                  <p>{language.dialect}</p>
                  <span className="continent-label">{language.continent}</span>
                  {isActive ? (
                    <button
                      type="button"
                      className="primary-button wide-button"
                      onClick={() => onSelectLanguage(key)}
                    >
                      {t.startJourney}
                    </button>
                  ) : (
                    <button type="button" className="secondary-button wide-button" disabled>
                      {t.comingSoon}
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="vote-shell">
        <div className="vote-head">
          <div>
            <div className="pill soft-pill">
              <Vote size={14} />
              <span>{t.globalVote}</span>
            </div>
            <h3>{t.voteTitle}</h3>
            <p>{t.voteSubtitle}</p>
          </div>
          <div className="vote-total">
            <span>{t.totalVotesLabel}</span>
            <strong>{totalVotes}</strong>
          </div>
        </div>

        <div className="vote-grid">
          {pollCandidates.map((key) => (
            <article key={key} className="vote-card">
              <div className="vote-card-head">
                <span className="language-flag">{CONTENT[key].flag}</span>
                <strong>{voteCounts[key] || 0}</strong>
              </div>
              <h4>{CONTENT[key].name}</h4>
              <p>{CONTENT[key].dialect}</p>
              <button type="button" className="ghost-button wide-button" onClick={() => onVote(key)}>
                {t.castVote}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
