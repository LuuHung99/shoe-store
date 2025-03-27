import { api } from "./api";

interface LoginCredentials {
  username: string;
  password: string;
}

const TOKEN_KEY = "auth_token";

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const login = async (credentials: LoginCredentials) => {
  try {
    const data = await api.post<{ token: string }>("/auth/login", credentials, {
      requiresAuth: false,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  removeToken();
};
