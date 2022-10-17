import { Role } from "../../users/interfaces";

export interface UserTokenInfo {
  id: number;
  userName: string;
  email: string;
  mobilePhone: string;
  role: Role;
}
