import { BaseModel } from "../../../shared";
import { Category, Difficulty, Type } from "./enums";

export interface Question extends BaseModel {
  category: Category | string,
  type: Type | string,
  difficulty: Difficulty | string,
  titleQuestion: string,
  correctAnswer: string | number | boolean,
  incorrectAnswers: {
    incorrectAnswer: string | number | boolean
  } []
}
