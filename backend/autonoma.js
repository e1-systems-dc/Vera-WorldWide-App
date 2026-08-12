import express from 'express';
import { register } from './controllers/authController.js';
import { createConversation } from './models/conversationModel.js';
import { createMessage } from './models/messageModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log("--> Autonoma Payload Received:", JSON.stringify(req.body, null, 2));

    const { testRunId, recipe } = req.body;
    const createdRefs = {};

    // Helper to resolve recipe references or fallback
    const resolve = (val) => {
      if (val && typeof val === 'object' && val._ref) {
        return createdRefs[val._ref];
      }
      return val;
    };

    // 1. Create Users
    if (recipe && recipe.create && recipe.create.User) {
      createdRefs.User = [];
      for (const userData of recipe.create.User) {
        const payload = {
          name: resolve(userData.name),
          email: resolve(userData.email),
          password: resolve(userData.password || 'TestPassword123!'),
          subscription_status: resolve(userData.subscription_status || 'free')
        };
        const user = await register(payload);
        const userId = user.id || user.uid;
        
        if (userData._alias) {
          createdRefs[userData._alias] = userId;
        }
        createdRefs.User.push(userId);
      }
    }

    // 2. Create Conversations
    if (recipe && recipe.create && recipe.create.Conversation) {
      createdRefs.Conversation = [];
      for (const convoData of recipe.create.Conversation) {
        const payload = {
          userId: resolve(convoData.userId)
        };
        const convo = await createConversation(payload);
        const convoId = convo.id;

        if (convoData._alias) {
          createdRefs[convoData._alias] = convoId;
        }
        createdRefs.Conversation.push(convoId);
      }
    }

    // 3. Create Messages
    if (recipe && recipe.create && recipe.create.Message) {
      createdRefs.Message = [];
      for (const msgData of recipe.create.Message) {
        const payload = {
          conversationId: resolve(msgData.conversationId),
          role: resolve(msgData.role),
          content: resolve(msgData.content)
        };
        const msg = await createMessage(payload);
        const msgId = msg.id;

        if (msgData._alias) {
          createdRefs[msgData._alias] = msgId;
        }
        createdRefs.Message.push(msgId);
      }
    }

    // Generate a unique token for this run
    const refsToken = Buffer.from(JSON.stringify({ testRunId })).toString('base64');

    return res.json({
      ok: true,
      testRunId,
      refsToken,
      resolvedVariables: { testRunId },
      auth: {
        headers: {
          Authorization: `Bearer mock-token-${testRunId}`
        }
      },
      created: createdRefs
    });

  } catch (err) {
    console.error("Autonoma Execution Error:", err);
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
});

export const autonomaHandler = router;