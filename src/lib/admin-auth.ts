import { ADMIN_PASSWORD, ADMIN_USERNAME } from "@/lib/private/admin-credentials";

export const ADMIN_SESSION_KEY = "iaclopedia-admin-session";

export function checkAdminCredentials(username: string, password: string): boolean {
  return username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ADMIN_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

export function setAdminAuthenticated(value: boolean) {
  if (typeof window === "undefined") return;
  try {
    if (value) {
      window.localStorage.setItem(ADMIN_SESSION_KEY, "true");
    } else {
      window.localStorage.removeItem(ADMIN_SESSION_KEY);
    }
  } catch {
    // localStorage indisponível (ex: modo privado) — ignora silenciosamente.
  }
}