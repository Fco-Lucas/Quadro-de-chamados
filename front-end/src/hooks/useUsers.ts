"use client"

import { useMutation } from "@tanstack/react-query"
import { createAdmin, CreateAdminInterace, UserInterface } from "@/services/users"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const addAdmin = () => {
  const router = useRouter();
  
  return useMutation<UserInterface, Error, CreateAdminInterace>({
    mutationFn: createAdmin,
    onSuccess: (data, variables, context) => {
      toast.success("Administrador criado com sucesso!");
      router.push("/sign-in");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })
}