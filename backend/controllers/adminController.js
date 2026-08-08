import { db } from "../db/index.js";

export const getOverview = async (req, res) => {
  try {
    const totalUsers = (await db.query("SELECT COUNT(*) FROM users")).rows[0]
      .count;

    const paidUsers = (
      await db.query(
        "SELECT COUNT(*) FROM users WHERE subscription_status = 'paid'"
      )
    ).rows[0].count;

    const totalConversations = (
      await db.query("SELECT COUNT(*) FROM conversations")
    ).rows[0].count;

    const recentActivity = (
      await db.query(
        `SELECT content AS event, created_at AS time
         FROM messages
         ORDER BY created_at DESC
         LIMIT 10`
      )
    ).rows;

    res.json({
      totalUsers,
      paidUsers,
      totalConversations,
      health: {
        db: "ok",
        api: "ok",
        ai: "ok",
      },
      recentActivity,
    });
  } catch (err) {
    console.error("Admin overview error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
