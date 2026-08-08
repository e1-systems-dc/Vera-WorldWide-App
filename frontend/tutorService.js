import { apiRequest } from "./apiClient";

export async function sendTutorMessage(payload) {
  return apiRequest("/tutor/respond", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}
const response = await sendTutorMessage({
  message: input,
  conversationId
});

setConversationId(response.conversationId);
addMessage("assistant", response.reply);
