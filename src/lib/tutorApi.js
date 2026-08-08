export async function sendTutorMessage(token, payload) {
  const res = await fetch(`${import.meta.env.VITE_VERA_API_URL}/tutor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || "Tutor request failed");
  }

  return res.json();
}
