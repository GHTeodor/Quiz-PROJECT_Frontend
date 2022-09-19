import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from "./components/questions/questions.component";
import { QuestionResolver } from "./services";

const routes: Routes = [
  { path: '', component: QuestionsComponent, resolve: { questionsData: QuestionResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
