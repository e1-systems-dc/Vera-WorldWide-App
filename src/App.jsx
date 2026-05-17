import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Bot,
  Languages,
  LayoutDashboard,
  Loader2,
  RefreshCcw,
  Send,
  User,
} from "./Components/Icons";

import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import SupportBubble from "./Components/SupportBubble";
import { CONTENT, activeLanguages, pollCandidates } from "./data";
import { createLocalAccount, syncAccountSnapshot } from "./lib/accountService";
import { createTutorRequest, sendTutorMessage } from "./lib/tutorService";
import TRANSLATIONS from "./translations";

const STORAGE_KEYS = {
  chatSessions: "vera.chatSessions",
  supportRequests: "vera.supportRequests",
  voteCounts: "vera.voteCounts",
  account: "vera.account",
  learnerProfile: "vera.learnerProfile",
  learnerProgress: "vera.learnerProgress",
};

const defaultVotes = Object.fromEntries(pollCandidates.map((key) => [key, 0]));
const defaultProgress = {
  streakDays: 0,
  totalSessions: 0,
  totalMessages: 0,
  xp: 0,
  lastSessionDate: null,
};
const defaultProfileForm = {
  name: "",
  reason: "Travel and real conversation",
  dailyGoal: "10 min/day",
  level: "Beginner",
};

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function isSameDay(left, right) {
  if (!left || !right) return false;
  return new Date(left).toDateString() === new Date(right).toDateString();
}

function buildIntroMessage(language, t, practiceMode) {
  const practicePrompts = {
    conversation: t.practiceConversationPrompt,
    drill: t.practiceDrillPrompt,
    roleplay: t.practiceRoleplayPrompt,
  };

  return {
    role: "assistant",
    text: `${t.tutorWelcome} ${language.name} (${language.dialect}). ${language.coachPrompt} ${practicePrompts[practiceMode] || t.practiceConversationPrompt}`,
  };
}

export default function App() {
  const [view, setView] = useState("landing");
  const [uiLang, setUiLang] = useState("en");
  const [selectedLanguageKey, setSelectedLanguageKey] = useState(activeLanguages[0]);
  const [sessionMode, setSessionMode] = useState("lean");
  const [currentPracticeMode, setCurrentPracticeMode] = useState("conversation");
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [profileForm, setProfileForm] = useState(defaultProfileForm);
  const [account, setAccount] = useState(() =>
    readStorage(STORAGE_KEYS.account, null),
  );
  const [learnerProfile, setLearnerProfile] = useState(() =>
    readStorage(STORAGE_KEYS.learnerProfile, null),
  );
  const [learnerProgress, setLearnerProgress] = useState(() =>
    readStorage(STORAGE_KEYS.learnerProgress, defaultProgress),
  );
  const [chatSessions, setChatSessions] = useState(() =>
    readStorage(STORAGE_KEYS.chatSessions, []),
  );
  const [supportRequests, setSupportRequests] = useState(() =>
    readStorage(STORAGE_KEYS.supportRequests, []),
  );
  const [voteCounts, setVoteCounts] = useState(() =>
    readStorage(STORAGE_KEYS.voteCounts, defaultVotes),
  );
  const [syncStatus, setSyncStatus] = useState("idle");
  const [lastSyncedAt, setLastSyncedAt] = useState(null);
  const scrollRef = useRef(null);

  const t = useMemo(
    () => ({
      ...TRANSLATIONS.en,
      ...(TRANSLATIONS[uiLang] || {}),
    }),
    [uiLang],
  );
  const isRtl = ["ar", "ur"].includes(uiLang);
  const selectedLanguage = CONTENT[selectedLanguageKey];

  useEffect(() => {
    setAccount((current) => createLocalAccount(current));
  }, []);

  useEffect(() => {
    setMessages([buildIntroMessage(selectedLanguage, t, currentPracticeMode)]);
  }, [selectedLanguageKey, t, currentPracticeMode]);

  useEffect(() => {
    if (learnerProfile) {
      setProfileForm({
        name: learnerProfile.name,
        reason: learnerProfile.reason,
        dailyGoal: learnerProfile.dailyGoal,
        level: learnerProfile.level,
      });
    }
  }, [learnerProfile]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.account, account);
  }, [account]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.learnerProfile, learnerProfile);
  }, [learnerProfile]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.learnerProgress, learnerProgress);
  }, [learnerProgress]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.chatSessions, chatSessions);
  }, [chatSessions]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.supportRequests, supportRequests);
  }, [supportRequests]);

  useEffect(() => {
    writeStorage(STORAGE_KEYS.voteCounts, voteCounts);
  }, [voteCounts]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, view]);

  useEffect(() => {
    if (!account || !learnerProfile) return;

    const timeoutId = window.setTimeout(async () => {
      try {
        setSyncStatus("syncing");
        const result = await syncAccountSnapshot({
          account,
          learnerProfile,
          learnerProgress,
          chatSessions,
          supportRequests,
          voteCounts,
        });
        setSyncStatus(result.source);
        setLastSyncedAt(result.syncedAt);
      } catch (error) {
        console.error(error);
        setSyncStatus("error");
      }
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [
    account,
    learnerProfile,
    learnerProgress,
    chatSessions,
    supportRequests,
    voteCounts,
  ]);

  const handleSelectLanguage = (key) => {
    setSelectedLanguageKey(key);
    setView(learnerProfile ? "dashboard" : "onboarding");
  };

  const handleVote = (key) => {
    setVoteCounts((current) => ({
      ...current,
      [key]: (current[key] || 0) + 1,
    }));
  };

  const handleSupportSubmit = (question) => {
    setSupportRequests((current) => [
      {
        id: crypto.randomUUID(),
        question,
        uiLang,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
  };

  const startPractice = (mode) => {
    setCurrentPracticeMode(mode);
    setMessages([buildIntroMessage(selectedLanguage, t, mode)]);
    setView("tutor");
  };

  const openDashboard = () => {
    setView(learnerProfile ? "dashboard" : "onboarding");
  };

  const completeOnboarding = () => {
    if (!profileForm.name.trim()) return;

    setLearnerProfile({
      id: crypto.randomUUID(),
      accountId: account?.id,
      ...profileForm,
      primaryLanguageKey: selectedLanguageKey,
      createdAt: new Date().toISOString(),
    });
    setView("dashboard");
  };

  const updateProgressAfterSession = () => {
    const now = new Date().toISOString();

    setLearnerProgress((current) => {
      const alreadyCountedToday = isSameDay(current.lastSessionDate, now);

      return {
        streakDays: alreadyCountedToday ? current.streakDays : current.streakDays + 1,
        totalSessions: current.totalSessions + 1,
        totalMessages: current.totalMessages + 2,
        xp: current.xp + (sessionMode === "lean" ? 8 : 14),
        lastSessionDate: now,
      };
    });
  };

  const resetSession = () => {
    setMessages([buildIntroMessage(selectedLanguage, t, currentPracticeMode)]);
    setInput("");
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const nextMessages = [...messages, { role: "user", text: userText }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    window.setTimeout(async () => {
      let reply = t.tutorFallbackReply;

      try {
        const result = await sendTutorMessage(
          createTutorRequest({
            input: userText,
            language: selectedLanguage,
            sessionMode,
            practiceMode: currentPracticeMode,
          }),
        );
        reply = result.text;
      } catch (error) {
        console.error(error);
      }

      const finishedMessages = [...nextMessages, { role: "assistant", text: reply }];
      setMessages(finishedMessages);
      setChatSessions((current) => [
        {
          id: crypto.randomUUID(),
          languageKey: selectedLanguageKey,
          languageLabel: `${selectedLanguage.name} (${selectedLanguage.dialect})`,
          practiceMode: currentPracticeMode,
          userText,
          assistantText: reply,
          createdAt: new Date().toISOString(),
        },
        ...current,
      ]);
      updateProgressAfterSession();
      setIsLoading(false);
    }, 650);
  };

  const totalVotes = Object.values(voteCounts).reduce(
    (sum, value) => sum + Number(value || 0),
    0,
  );

  return (
    <div className="app-shell" dir={isRtl ? "rtl" : "ltr"}>
      {view === "landing" && (
        <LandingPage
          t={t}
          uiLang={uiLang}
          setUiLang={setUiLang}
          setView={setView}
          isRtl={isRtl}
          selectedLanguageKey={selectedLanguageKey}
          onSelectLanguage={handleSelectLanguage}
          sessionMode={sessionMode}
          setSessionMode={setSessionMode}
          onVote={handleVote}
          voteCounts={voteCounts}
          totalVotes={totalVotes}
          toggleSupport={() => setIsSupportOpen(true)}
          hasProfile={Boolean(learnerProfile)}
          openDashboard={openDashboard}
        />
      )}

      {view === "onboarding" && (
        <section className="panel dashboard-shell">
          <header className="panel-header">
            <div>
              <p className="eyebrow">{t.onboardingEyebrow}</p>
              <h1 className="panel-title">{t.onboardingTitle}</h1>
            </div>
            <button type="button" className="ghost-button" onClick={() => setView("landing")}>
              {t.backToHome}
            </button>
          </header>

          <main className="dashboard-content">
            <section className="dashboard-grid">
              <article className="admin-card">
                <h2>{t.profileSetupTitle}</h2>
                <div className="form-grid">
                  <label className="field">
                    <span>{t.nameField}</span>
                    <input
                      value={profileForm.name}
                      onChange={(event) =>
                        setProfileForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                    />
                  </label>
                  <label className="field">
                    <span>{t.reasonField}</span>
                    <select
                      value={profileForm.reason}
                      onChange={(event) =>
                        setProfileForm((current) => ({
                          ...current,
                          reason: event.target.value,
                        }))
                      }
                    >
                      <option>Travel and real conversation</option>
                      <option>Family and community</option>
                      <option>Work and networking</option>
                      <option>Culture and confidence</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>{t.goalField}</span>
                    <select
                      value={profileForm.dailyGoal}
                      onChange={(event) =>
                        setProfileForm((current) => ({
                          ...current,
                          dailyGoal: event.target.value,
                        }))
                      }
                    >
                      <option>10 min/day</option>
                      <option>20 min/day</option>
                      <option>30 min/day</option>
                    </select>
                  </label>
                  <label className="field">
                    <span>{t.levelField}</span>
                    <select
                      value={profileForm.level}
                      onChange={(event) =>
                        setProfileForm((current) => ({
                          ...current,
                          level: event.target.value,
                        }))
                      }
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </label>
                </div>
                <button type="button" className="primary-button" onClick={completeOnboarding}>
                  {t.finishSetup}
                </button>
              </article>

              <article className="admin-card">
                <h2>{t.selectedDialectTitle}</h2>
                <div className="record-card">
                  <div className="record-head">
                    <strong>
                      {selectedLanguage.flag} {selectedLanguage.name}
                    </strong>
                    <span>{selectedLanguage.continent}</span>
                  </div>
                  <p>{selectedLanguage.dialect}</p>
                </div>
                <p className="dashboard-copy">{t.selectedDialectCopy}</p>
              </article>
            </section>
          </main>
        </section>
      )}

      {view === "dashboard" && learnerProfile && (
        <Dashboard
          t={t}
          profile={learnerProfile}
          progress={learnerProgress}
          selectedLanguageKey={selectedLanguageKey}
          setSelectedLanguageKey={setSelectedLanguageKey}
          sessionMode={sessionMode}
          setSessionMode={setSessionMode}
          onStartPractice={startPractice}
          onBack={() => setView("landing")}
        />
      )}

      {view === "tutor" && (
        <section className="panel tutor-shell">
          <header className="panel-header">
            <div className="panel-header-group">
              <button
                type="button"
                className="icon-button"
                onClick={() => setView(learnerProfile ? "dashboard" : "landing")}
                aria-label={t.backToHome}
              >
                <ArrowLeft className={isRtl ? "icon-rtl" : ""} />
              </button>
              <div>
                <p className="eyebrow">{t.tutorSubtitle}</p>
                <h1 className="panel-title">{t.tutorTitle}</h1>
              </div>
            </div>
            <div className="panel-header-group">
              <div className="status-pill">
                <Languages size={16} />
                <span>{selectedLanguage.name}</span>
              </div>
              <div className="status-pill">
                <span>{t.modeLabel}</span>
                <strong>{currentPracticeMode}</strong>
              </div>
              <button
                type="button"
                className={`ghost-button mode-chip ${sessionMode === "lean" ? "mode-active" : ""}`}
                onClick={() =>
                  setSessionMode((current) => (current === "lean" ? "guided" : "lean"))
                }
              >
                {sessionMode === "lean" ? t.leanModeLabel : t.guidedModeLabel}
              </button>
              <button
                type="button"
                className="icon-button"
                onClick={resetSession}
                aria-label={t.resetSession}
              >
                <RefreshCcw />
              </button>
            </div>
          </header>

          <main ref={scrollRef} className="chat-scroll">
            <div className="chat-wrap">
              {messages.map((message, index) => (
                <article
                  key={`${message.role}-${index}`}
                  className={`message-row ${message.role === "user" ? "is-user" : ""}`}
                >
                  <div className={`message-avatar ${message.role === "user" ? "user-avatar" : ""}`}>
                    {message.role === "user" ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`message-bubble ${message.role === "user" ? "user-bubble" : ""}`}>
                    {message.text}
                  </div>
                </article>
              ))}

              {isLoading && (
                <article className="message-row">
                  <div className="message-avatar">
                    <Bot size={18} />
                  </div>
                  <div className="message-bubble loading-bubble">
                    <Loader2 size={18} className="spin" />
                    <span>{t.veraThinking}</span>
                  </div>
                </article>
              )}
            </div>
          </main>

          <footer className="composer-shell">
            <div className="composer-card">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleSend()}
                placeholder={`${t.tutorPlaceholder} ${selectedLanguage.flag}`}
                className="composer-input"
              />
              <button
                type="button"
                className="primary-button composer-send"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
              >
                <Send size={18} className={isRtl ? "icon-rtl" : ""} />
              </button>
            </div>
          </footer>
        </section>
      )}

      {view === "admin" && (
        <section className="panel admin-shell">
          <header className="panel-header">
            <div className="panel-header-group">
              <button
                type="button"
                className="icon-button"
                onClick={() => setView("landing")}
                aria-label={t.backToHome}
              >
                <ArrowLeft className={isRtl ? "icon-rtl" : ""} />
              </button>
              <div>
                <p className="eyebrow">{t.adminOverview}</p>
                <h1 className="panel-title">{t.adminPortal}</h1>
              </div>
            </div>
            <div className="status-pill">
              <LayoutDashboard size={16} />
              <span>{t.localDataMode}</span>
            </div>
          </header>

          <main className="admin-content">
            <section className="stats-grid">
              <article className="stat-card">
                <span className="stat-label">{t.totalSessions}</span>
                <strong>{chatSessions.length}</strong>
              </article>
              <article className="stat-card">
                <span className="stat-label">{t.supportRequestsLabel}</span>
                <strong>{supportRequests.length}</strong>
              </article>
              <article className="stat-card">
                <span className="stat-label">{t.totalVotesLabel}</span>
                <strong>{totalVotes}</strong>
              </article>
              <article className="stat-card">
                <span className="stat-label">{t.streakLabel}</span>
                <strong>{learnerProgress.streakDays}</strong>
              </article>
              <article className="stat-card">
                <span className="stat-label">{t.syncStatusLabel}</span>
                <strong>{syncStatus}</strong>
              </article>
            </section>

            <section className="admin-grid">
              <article className="admin-card">
                <h2>{t.recentChats}</h2>
                {chatSessions.length === 0 ? (
                  <p className="empty-state">{t.noChatData}</p>
                ) : (
                  <div className="stack-list">
                    {chatSessions.slice(0, 8).map((session) => (
                      <div key={session.id} className="record-card">
                        <div className="record-head">
                          <strong>{session.languageLabel}</strong>
                          <span>{formatTime(session.createdAt)}</span>
                        </div>
                        <p>
                          <span>{t.modeLabel}</span> {session.practiceMode}
                        </p>
                        <p>
                          <span>{t.youSaid}</span> {session.userText}
                        </p>
                        <p>
                          <span>{t.veraSaid}</span> {session.assistantText}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>

              <article className="admin-card">
                <h2>{t.requestInbox}</h2>
                {supportRequests.length === 0 ? (
                  <p className="empty-state">{t.noSupportData}</p>
                ) : (
                  <div className="stack-list">
                    {supportRequests.slice(0, 8).map((request) => (
                      <div key={request.id} className="record-card">
                        <div className="record-head">
                          <strong>{request.uiLang.toUpperCase()}</strong>
                          <span>{formatTime(request.createdAt)}</span>
                        </div>
                        <p>{request.question}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>

              <article className="admin-card">
                <h2>{t.accountTitle}</h2>
                <div className="stack-list">
                  <div className="record-card">
                    <div className="record-head">
                      <strong>{account?.id?.slice(0, 12) || t.notAvailableLabel}</strong>
                      <span>{account?.source || "local"}</span>
                    </div>
                    <p>
                      <span>{t.syncStatusLabel}</span> {syncStatus}
                    </p>
                    <p>
                      <span>{t.lastSyncedLabel}</span>{" "}
                      {lastSyncedAt ? formatTime(lastSyncedAt) : t.notAvailableLabel}
                    </p>
                  </div>
                </div>
              </article>

              <article className="admin-card">
                <h2>{t.voteLeaderboard}</h2>
                <div className="stack-list">
                  {pollCandidates
                    .slice()
                    .sort((left, right) => (voteCounts[right] || 0) - (voteCounts[left] || 0))
                    .map((key) => (
                      <div key={key} className="vote-row">
                        <div>
                          <strong>
                            {CONTENT[key].flag} {CONTENT[key].name}
                          </strong>
                          <p>{CONTENT[key].dialect}</p>
                        </div>
                        <span>{voteCounts[key] || 0}</span>
                      </div>
                    ))}
                </div>
              </article>
            </section>
          </main>
        </section>
      )}

      <SupportBubble
        isOpen={isSupportOpen}
        toggle={() => setIsSupportOpen((current) => !current)}
        t={t}
        isRtl={isRtl}
        onSubmit={handleSupportSubmit}
      />
    </div>
  );
}
