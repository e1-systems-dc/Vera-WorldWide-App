import { z } from "zod";
import { defineFactory } from "@autonoma-ai/sdk";
import { createUser, deleteUser, TEST_USER_PASSWORD } from "../models/userModel.js";
import { createConversation } from "../models/conversationModel.js";
import { createMessage } from "../models/messageModel.js";
import { db } from "../db/index.js";

const UserInput = z.object({
  name: z.string(),
  email: z.string(),
  subscription_status: z.enum(["free", "paid"]).optional(),
});

const ConversationInput = z.object({
  userId: z.union([z.number(), z.string()]),
});

const MessageInput = z.object({
  conversationId: z.union([z.number(), z.string()]),
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

export const User = defineFactory({
  inputSchema: UserInput,
  create: async (data) => {
    const user = await createUser({
      name: data.name,
      email: data.email,
      password: TEST_USER_PASSWORD,
      subscriptionStatus: data.subscription_status ?? "free",
    });
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      subscription_status: user.subscription_status,
    };
  },
  teardown: async (record) => {
    await deleteUser(record.id);
  },
});

export const Conversation = defineFactory({
  inputSchema: ConversationInput,
  create: async (data) => {
    const conversation = await createConversation(Number(data.userId));
    return {
      id: conversation.id,
      user_id: conversation.user_id,
    };
  },
  teardown: async (record) => {
    await db.query("DELETE FROM conversations WHERE id = $1", [record.id]);
  },
});

export const Message = defineFactory({
  inputSchema: MessageInput,
  create: async (data) => {
    const message = await createMessage(
      Number(data.conversationId),
      data.role,
      data.content
    );
    return {
      id: message.id,
      conversation_id: message.conversation_id,
      role: message.role,
      content: message.content,
    };
  },
  teardown: async (record) => {
    await db.query("DELETE FROM messages WHERE id = $1", [record.id]);
  },
});

export const factories = { User, Conversation, Message };
