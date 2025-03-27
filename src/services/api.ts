import { getToken } from "./authService";

const API_URL = import.meta.env.VITE_API_URL;

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "An error occurred" }));
    throw new ApiError(response.status, error.message || "An error occurred");
  }
  return response.json();
};

const getHeaders = (requiresAuth: boolean = true): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (requiresAuth) {
    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};

export const api = {
  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { requiresAuth = true, ...restOptions } = options;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: getHeaders(requiresAuth),
      ...restOptions,
    });
    return handleResponse(response);
  },

  async post<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const { requiresAuth = true, ...restOptions } = options;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: getHeaders(requiresAuth),
      body: JSON.stringify(data),
      ...restOptions,
    });
    return handleResponse(response);
  },

  async put<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Promise<T> {
    const { requiresAuth = true, ...restOptions } = options;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: getHeaders(requiresAuth),
      body: JSON.stringify(data),
      ...restOptions,
    });
    return handleResponse(response);
  },

  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { requiresAuth = true, ...restOptions } = options;
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      headers: getHeaders(requiresAuth),
      ...restOptions,
    });
    return handleResponse(response);
  },
};
