import jwt from "jsonwebtoken";
import { createExpressHandler } from "@autonoma-ai/server-express";
import { factories } from "./factories.js";
import { TEST_USER_PASSWORD } from "../models/userModel.js";

export function createAutonomaHandler() {
  return createExpressHandler({
    scopeField: "userId",
    sharedSecret: process.env.AUTONOMA_SHARED_SECRET,
    signingSecret: process.env.AUTONOMA_SIGNING_SECRET,
    factories,
    auth: async (user) => {
      if (!user) {
        return {};
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return {
        headers: { Authorization: `Bearer ${token}` },
        credentials: {
          email: String(user.email),
          password: TEST_USER_PASSWORD,
        },
      };
    },
  });
}
