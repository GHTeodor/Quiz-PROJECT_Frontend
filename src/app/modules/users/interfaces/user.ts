import { Role } from "./enum/Role";

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

interface BaseModel {
  id: number;
  createdAt: string;
  updatedAt?: string;
}
