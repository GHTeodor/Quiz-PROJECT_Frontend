import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnswersComponent } from "./components/answers/answers.component";
import { AnswerResolver } from "./services";

const routes: Routes = [
  { path: '', component: AnswersComponent, resolve: { answerData: AnswerResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
