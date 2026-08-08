import { apiRequest } from "./apiClient";

export function createTutorRequest({
  input,
  language,
  sessionMode,
  practiceMode,
  conversationId,
}) {
  return {
    message: input,
    sessionMode,
    practiceMode,
    language: {
      name: language.name,
      dialect: language.dialect,
      continent: language.continent,
      coachPrompt: language.coachPrompt,
    },
    conversationId,
  };
}

export async function sendTutorMessage(payload) {
  return apiRequest("/tutor/respond", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
