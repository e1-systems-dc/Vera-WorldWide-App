import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { db } from "../db/index.js";

const router = express.Router();

// Get all conversations for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await db.query(
      `
      SELECT id, created_at
      FROM conversations
      WHERE user_id = $1
      ORDER BY created_at DESC
      `,
      [userId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Get conversations error:", err);
    res.status(500).json({ error: "Failed to load conversations" });
  }
});

// Get all messages for a conversation
router.get("/:conversationId/messages", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    const { conversationId } = req.params;

    // Ensure conversation belongs to user
    const convo = await db.query(
      `
      SELECT id
      FROM conversations
      WHERE id = $1 AND user_id = $2
      `,
      [conversationId, userId]
    );

    if (convo.rows.length === 0) {
      return res.status(404).json({ error: "Conversation not found" });
    }

    const messages = await db.query(
      `
      SELECT role, content, created_at
      FROM messages
      WHERE conversation_id = $1
      ORDER BY created_at ASC
      `,
      [conversationId]
    );

    res.json(messages.rows);
  } catch (err) {
    console.error("Get messages error:", err);
    res.status(500).json({ error: "Failed to load messages" });
  }
});

export default router;
