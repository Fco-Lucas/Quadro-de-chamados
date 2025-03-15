"use client";

import { useState } from "react"
import Cookies from "js-cookie";
import { loginUser, LoginData } from "@/services/auth"

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(data: LoginData) {
    setLoading(true)

    try {
      const { token } = await loginUser(data);
      Cookies.set("authToken", token, { expires: 1 });
      return true;
    } catch (err: unknown) {
      if(err instanceof Error) setError(err.message);
      else setError("Erro desconhecido ao realizar login, tente novamente mais tarde");
      return false;
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error };
}