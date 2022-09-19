import { environment } from "../../environments/environment";

const { baseURL } = environment;

export const urls = {
  users: `${ baseURL }/user`,
  questions: `${ baseURL }/question`,
  answers: `${baseURL}/answer`
};
