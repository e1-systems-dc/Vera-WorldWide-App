export async function fetchConversations(token) {
  const res = await fetch(
    `${import.meta.env.VITE_VERA_API_URL}/conversations`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to load conversations");
  return res.json();
}

export async function fetchConversationMessages(token, conversationId) {
  const res = await fetch(
    `${import.meta.env.VITE_VERA_API_URL}/conversations/${conversationId}/messages`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to load messages");
  return res.json();
}
