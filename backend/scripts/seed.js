import { db } from "./db/index.js";

const seed = async () => {
  await db.query("DELETE FROM users");

  await db.query(`
    INSERT INTO users (name, email, password, subscription_status)
    VALUES (
      'Test User',
      'test@test.com',
      '$2b$10$mO39IyXyyInm/QZIKtZJlOtRoYxqIkVHmmfUgX2HWAll6e8pYy7y2',
      'paid'
    )
  `);

  console.log("Seed complete");
  process.exit();
};

seed();
