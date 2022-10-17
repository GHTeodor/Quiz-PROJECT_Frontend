export interface UpdateUser {
  id?: number;
  firstName: string,
  lastName?: string,
  userName: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string,
  age?: number,
}
