import { environment } from "../../environments/environment";

const { baseURL, quizApi } = environment;

export const urls = {
  users: `${ baseURL }/user`,
  questions: `${ baseURL }/question`,
  answers: `${ baseURL }/answer`,

  registration: `${ baseURL }/auth/registration`,
  login: `${ baseURL }/auth/login`,
  refresh: `${ baseURL }/auth/refreshToken`,
  logout: `${ baseURL }/auth/logout`,
  decodeToken: `${ baseURL }/auth/get`,

  admin: `${ baseURL }/admin`,
  mailKit: `${ baseURL }/mailkit`,

  quiz: `${ quizApi }/api.php`
};
