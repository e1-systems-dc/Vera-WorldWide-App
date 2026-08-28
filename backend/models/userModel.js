import bcrypt from "bcrypt";
import { db } from "../db/index.js";

export const TEST_USER_PASSWORD = "TestPassword123!";

export async function createUser({ name, email, password, subscriptionStatus = "free" }) {
  const existing = await db.query("SELECT id FROM users WHERE email = $1", [email]);
  if (existing.rows.length) {
    throw new Error("Email already registered");
  }

  const hashed = await bcrypt.hash(password, 10);

  const result = await db.query(
    `INSERT INTO users (name, email, password, subscription_status)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, subscription_status`,
    [name, email, hashed, subscriptionStatus]
  );

  return result.rows[0];
}

export async function deleteUser(userId) {
  await db.query("DELETE FROM users WHERE id = $1", [userId]);
}
