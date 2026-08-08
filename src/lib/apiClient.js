const apiBaseUrl = import.meta.env.VITE_VERA_API_URL;

export function hasBackendApi() {
  return Boolean(apiBaseUrl);
}

export async function apiRequest(path, options = {}) {
  if (!apiBaseUrl) {
    throw new Error("VITE_VERA_API_URL is not configured");
  }

  const token = localStorage.getItem("vera_token");

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const text = await response.text();

  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { error: text };
  }

  if (!response.ok) {
    throw new Error(data?.error || `Request failed: ${response.status}`);
  }

  return data;
}
