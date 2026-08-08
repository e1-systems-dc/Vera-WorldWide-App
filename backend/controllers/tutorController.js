import { createConversation } from "../models/conversationModel.js";
import { createMessage } from "../models/messageModel.js";
import { callAI } from "../services/aiService.js";

export const handleTutorMessage = async (req, res) => {
  try {
    const userId = req.user.id;
    const { message, conversationId } = req.body;

    let convoId = conversationId;

    if (!convoId) {
      const convo = await createConversation(userId);
      convoId = convo.id;
    }

    await createMessage(convoId, "user", message);

    const aiReply = await callAI(message);

    await createMessage(convoId, "assistant", aiReply);

    res.json({
      conversationId: convoId,
      reply: aiReply,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Tutor failed" });
  }
};
