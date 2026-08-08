import { db } from "../db/index.js";

export const requirePaid = async (req, res, next) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = await db.query(
      `SELECT subscription_status FROM users WHERE id = $1`,
      [req.user.id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    if (result.rows[0].subscription_status !== "paid") {
      return res.status(403).json({ error: "Paid membership required" });
    }

    next();
  } catch (err) {
    console.error("requirePaid error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
