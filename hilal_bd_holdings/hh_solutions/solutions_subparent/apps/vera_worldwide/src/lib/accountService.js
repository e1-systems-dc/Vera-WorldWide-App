import { apiRequest, hasBackendApi } from "./apiClient";

export function createLocalAccount(existingAccount) {
  if (existingAccount) return existingAccount;

  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    source: "local",
  };
}

export async function syncAccountSnapshot(snapshot) {
  if (!hasBackendApi()) {
    return {
      ok: true,
      source: "local",
      syncedAt: new Date().toISOString(),
    };
  }

  const data = await apiRequest("/account/sync", {
    method: "POST",
    body: JSON.stringify(snapshot),
  });

  return {
    ok: true,
    source: "backend",
    syncedAt: data.syncedAt || new Date().toISOString(),
  };
}
