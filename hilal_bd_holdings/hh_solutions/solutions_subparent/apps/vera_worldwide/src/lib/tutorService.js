export function createTutorRequest({
  input,
  language,
  sessionMode,
  practiceMode,
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
  };
}

function buildLocalTutorReply(request) {
  const { message, language, sessionMode, practiceMode } = request;
  const trimmed = message.trim();
  const lower = trimmed.toLowerCase();
  const suggestion =
    lower.includes("i goed") || lower.includes("i goed to")
      ? "[Try 'I went' instead of 'I goed'.]"
      : lower.includes("me gusta to")
        ? "[Try staying in one language: 'Me gusta' or 'I like'.]"
        : "[Small correction: keep your sentence short and natural.]";

  const starter =
    language.starterPhrases[
      Math.abs(trimmed.length + language.name.length) %
        language.starterPhrases.length
    ];

  const modePrompt =
    practiceMode === "drill"
      ? starter.practiceQuestion
      : practiceMode === "roleplay"
        ? `Roleplay prompt: order food, ask a question, or introduce yourself naturally in ${language.name}.`
        : starter.culturalNote;

  if (sessionMode === "lean") {
    if (lower.includes("?")) return `${starter.answer} ${suggestion}`;
    if (trimmed.split(" ").length < 4) {
      return `${starter.expand} ${suggestion}`;
    }
    return `${starter.praise} ${suggestion}`;
  }

  if (lower.includes("?")) return `${starter.answer} ${suggestion} ${modePrompt}`;
  if (trimmed.split(" ").length < 4) {
    return `${starter.expand} ${suggestion} ${modePrompt}`;
  }
  return `${starter.praise} ${suggestion} ${modePrompt}`;
}

export async function sendTutorMessage(request) {
  const apiBaseUrl = import.meta.env.VITE_VERA_API_URL;

  if (!apiBaseUrl) {
    return {
      text: buildLocalTutorReply(request),
      source: "local",
    };
  }

  const response = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/tutor/respond`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`Tutor backend failed with status ${response.status}`);
  }

  const data = await response.json();

  return {
    text: data.reply || buildLocalTutorReply(request),
    source: "backend",
  };
}
