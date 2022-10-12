import { environment } from "../../environments/environment";

const { baseURL, quizApi } = environment;

export const urls = {
  users: `${ baseURL }/user`,
  questions: `${ baseURL }/question`,
  answers: `${ baseURL }/answer`,

  registration: `${ baseURL }/Auth/Registration`,
  login: `${ baseURL }/Auth/Login`,
  refresh: `${ baseURL }/Auth/RefreshToken`,
  logout: `${ baseURL }/Auth/Logout`,

  quiz: `${quizApi}/api.php`
};
