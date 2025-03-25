import { UserRoleEnum } from "./users";

export interface JwtPayloadInterface {
  sub: string;
  iat: number;
  exp: number;
  role: UserRoleEnum;
  id: string;
}