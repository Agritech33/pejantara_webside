import { fetcher } from "./fetcher";

export const login = async (email, password) => {
  return fetcher("/api/auth/login", "POST", { email, password });
};

export const register = async (name, email, password) => {
  return fetcher("/auth/register", "POST", { name, email, password });
};
