import apiClient from "@/lib/api";

export interface LoginData {
  cpf: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export async function login(data: LoginData): Promise<LoginResponse> {
  const response = await apiClient.post("/auth", data);
  return response.data;
}