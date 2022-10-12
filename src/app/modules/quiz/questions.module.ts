import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionResolver, QuestionService } from "./services";
import { QuizMenuComponent } from './components/quiz-menu/quiz-menu.component';
import { QuizApiQuestionsComponent } from './components/quiz-api-questions/quiz-api-questions.component';
import { QuizApiQuestionComponent } from './components/quiz-api-question/quiz-api-question.component';
import { QuestionComponent } from './components/question/question.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuizMenuComponent,
    QuizApiQuestionsComponent,
    QuizApiQuestionComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    QuestionService,
    QuestionResolver
  ]
})
export class QuestionsModule { }
