import apiClient from "@/lib/api";

export enum UserRole {
  ADMIN = "ADMIN",
  SUPERVISOR = "SUPERVISOR",
  USER = "USER",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export interface UserInterface {
  id: string;
  name: string;
  cpf: string;
  password: string;
  userRole: UserRole;
  userStatus: UserStatus;
}

export interface CreateAdminInterace {
  name: string;
  cpf: string;
  password: string;
}

export async function createAdmin(data: CreateAdminInterace): Promise<UserInterface> {
  const response = await apiClient.post("/users/createAdmin", data);
  return response.data;
}