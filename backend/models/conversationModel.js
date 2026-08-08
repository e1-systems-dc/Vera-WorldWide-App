import { db } from "../db/index.js";

export const createConversation = async (userId) => {
  const result = await db.query(
    `
    INSERT INTO conversations (user_id)
    VALUES ($1)
    RETURNING *
    `,
    [userId]
  );

  return result.rows[0];
};
