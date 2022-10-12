import { Category, Difficulty, Type } from "./enums";

export interface QuizForm {
  amount: number;
  category?: Category;
  difficulty?: Difficulty;
  type?: Type;
}
