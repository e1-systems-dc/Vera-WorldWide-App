import { apiRequest } from "./apiClient";

export async function registerUser({ name, email, password }) {
  const result = await apiRequest("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });

  if (result?.token) {
    localStorage.setItem("vera_token", result.token);
  }

  return result;
}

export async function loginUser({ email, password }) {
  const result = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (result?.token) {
    localStorage.setItem("vera_token", result.token);
  }

  return result;
}
