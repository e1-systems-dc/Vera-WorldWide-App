import { useEffect, useState } from "react";
import { fetchConversations } from "../lib/conversationApi";
import "../animations.css";

export default function ConversationList({ token, onSelect }) {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const data = await fetchConversations(token);
        if (active) setConversations(data);
      } catch (err) {
        console.error("Failed to load conversations:", err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, [token]);

  if (loading) {
    return (
      <div className="px-6 py-3 text-sm text-[#4A5A52] fade-in">
        Loading conversations…
      </div>
    );
  }

  if (!conversations.length) {
    return (
      <div className="px-6 py-3 text-sm text-[#4A5A52] fade-in">
        No conversations yet. Start a new one by messaging the tutor.
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-2 slide-in-right">
      <div className="bg-white rounded-2xl border border-[#E5E2D8] shadow-sm">
        <div className="px-4 py-3 border-b border-[#E5E2D8]">
          <p className="text-sm font-semibold text-[#112018]">Conversations</p>
        </div>

        <div className="divide-y divide-[#E5E2D8]">
          {conversations.map((c, index) => {
            const created = new Date(c.created_at);
            const timeLabel = created.toLocaleString(undefined, {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <button
                key={c.id}
                onClick={() => onSelect(c.id)}
                className="w-full flex items-center px-4 py-3 text-left hover:bg-[#F7F5EF] active:bg-[#EDEBE4] transition-all btn-press fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-3 text-sm font-semibold avatar-bounce">
                  {String(c.id).slice(-2)}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#112018]">
                      Conversation #{c.id}
                    </span>
                    <span className="text-xs text-[#7A867F]">{timeLabel}</span>
                  </div>
                  <p className="text-xs text-[#4A5A52] mt-1">
                    Tap or swipe to open
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
