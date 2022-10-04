import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from "./components/questions/questions.component";
import { QuestionResolver } from "./services";
import {QuizMenuComponent} from "./components/quiz-menu/quiz-menu.component";
import {QuizApiQuestionsComponent} from "./components/quiz-api-questions/quiz-api-questions.component";

const routes: Routes = [
  { path: '', component: QuizMenuComponent },
  { path: 'api-questions', component: QuizApiQuestionsComponent },
  { path: 'questions', component: QuestionsComponent, resolve: { questionsData: QuestionResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
