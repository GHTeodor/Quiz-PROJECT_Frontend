import { BaseModel } from "../../../shared";

export interface Question extends BaseModel {
  category: string,
  type: string,
  difficulty: string,
  titleQuestion: string,
  correctAnswer: string | number | boolean,
  incorrectAnswers: {
    incorrectAnswer: string | number | boolean
  } []
}
