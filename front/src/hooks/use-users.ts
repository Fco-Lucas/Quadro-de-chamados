import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import apiClient from "@/lib/apiClient"
import { UserInterface } from "@/types/users"

export const useUsers = () => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: async () => {
      const { data } = await apiClient.get<UserInterface[]>("/users")
      return data
    }
  })
}