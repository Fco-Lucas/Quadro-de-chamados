import { apiFetch } from "@/lib/api";

export interface LoginData {
  cpf: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export async function loginUser(data: LoginData) {
  return apiFetch<LoginResponse>("/auth", {
    method: "POST",
    body: JSON.stringify(data)
  })
}