import { useEffect, useState } from "react";

export default function AdminPanel({ token }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadStats() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_VERA_API_URL}/admin/overview`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to load admin stats");

      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-[#112018] mb-6">
        Admin Dashboard
      </h1>

      {loading && (
        <p className="text-[#4A5A52] text-sm">Loading analytics…</p>
      )}

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Users */}
          <div className="bg-white border border-[#E5E2D8] rounded-xl p-4 shadow-sm">
            <p className="text-sm text-[#4A5A52]">Total Users</p>
            <p className="text-3xl font-bold text-[#112018] mt-1">
              {stats.totalUsers}
            </p>
          </div>

          {/* Conversations */}
          <div className="bg-white border border-[#E5E2D8] rounded-xl p-4 shadow-sm">
            <p className="text-sm text-[#4A5A52]">Total Conversations</p>
            <p className="text-3xl font-bold text-[#112018] mt-1">
              {stats.totalConversations}
            </p>
          </div>

          {/* Paid Users */}
          <div className="bg-white border border-[#E5E2D8] rounded-xl p-4 shadow-sm">
            <p className="text-sm text-[#4A5A52]">Paid Members</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">
              {stats.paidUsers}
            </p>
          </div>
        </div>
      )}

      {/* System Health */}
      <div className="bg-white border border-[#E5E2D8] rounded-xl p-4 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-[#112018] mb-3">
          System Health
        </h2>

        {!stats && (
          <p className="text-sm text-[#4A5A52]">Checking system health…</p>
        )}

        {stats && (
          <div className="space-y-2">
            <HealthRow label="Database" status={stats.health.db} />
            <HealthRow label="API" status={stats.health.api} />
            <HealthRow label="AI Service" status={stats.health.ai} />
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-[#E5E2D8] rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-[#112018] mb-3">
          Recent Activity
        </h2>

        {!stats && (
          <p className="text-sm text-[#4A5A52]">Loading activity…</p>
        )}

        {stats && stats.recentActivity.length === 0 && (
          <p className="text-sm text-[#4A5A52]">No recent activity.</p>
        )}

        {stats && stats.recentActivity.length > 0 && (
          <div className="space-y-3">
            {stats.recentActivity.map((item, i) => (
              <div
                key={i}
                className="p-3 bg-[#FAF9F6] border border-[#DAD6CC] rounded-lg"
              >
                <p className="text-sm text-[#112018]">{item.event}</p>
                <p className="text-xs text-[#4A5A52] mt-1">
                  {new Date(item.time).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function HealthRow({ label, status }) {
  const color =
    status === "ok"
      ? "text-emerald-600"
      : status === "warn"
      ? "text-yellow-600"
      : "text-red-600";

  const dot =
    status === "ok"
      ? "bg-emerald-600"
      : status === "warn"
      ? "bg-yellow-600"
      : "bg-red-600";

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[#112018]">{label}</span>
      <div className="flex items-center space-x-2">
        <span className={`w-3 h-3 rounded-full ${dot}`}></span>
        <span className={`text-sm font-semibold ${color}`}>
          {status.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
