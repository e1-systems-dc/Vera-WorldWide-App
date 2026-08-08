import { db } from "../db/index.js";

export const createMessage = async (conversationId, role, content) => {
  const result = await db.query(
    `
    INSERT INTO messages (conversation_id, role, content)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [conversationId, role, content]
  );

  return result.rows[0];
};
