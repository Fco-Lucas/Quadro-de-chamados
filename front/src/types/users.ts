export enum UserRoleEnum {
  ADMIN = "ADMIN",
  SUPERVISOR = "SUPERVISOR",
  USER = "USER"
}

export enum UserStatusEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export interface UserInterface {
  id: string;
  name: string;
  cpf: string;
  userRole: UserRoleEnum;
  userStatus: UserStatusEnum;
}