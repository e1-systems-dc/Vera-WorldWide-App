const apiBaseUrl = import.meta.env.VITE_VERA_API_URL;

export function hasBackendApi() {
  return Boolean(apiBaseUrl);
}

export async function apiRequest(path, options = {}) {
  if (!apiBaseUrl) {
    throw new Error("VITE_VERA_API_URL is not configured");
  }

  const response = await fetch(`${apiBaseUrl.replace(/\/$/, "")}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}
