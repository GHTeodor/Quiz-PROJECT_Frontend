import { Role } from "./enum/Role";
import { BaseModel } from "../../../shared";

export interface User extends BaseModel, RefreshToken {
  firstName: string;
  lastName?: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  passwordHash: string;
  confirmPasswordHash: string;
  passwordSalt: string;
  age?: string;
  role: Role;
  refreshToken?: RefreshToken;
}

interface RefreshToken extends BaseModel{
  token: string;
  expires: string;
  userId: number;
}
