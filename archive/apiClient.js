const apiBaseUrl = import.meta.env.VITE_VERA_API_URL;

export function hasBackendApi() {
  return Boolean(apiBaseUrl);
}

export async function apiRequest(path, options = {}) {
  if (!apiBaseUrl) {
    throw new Error("VITE_VERA_API_URL is not configured");
  }

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const token = localStorage.getItem("vera_token");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "API error");
  }

  return response.json();
}
