import { useMutation } from '@tanstack/react-query';
import { login, LoginData, LoginResponse } from "@/services/auth";

export const useAuth = () => {
  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: login,
  });
};