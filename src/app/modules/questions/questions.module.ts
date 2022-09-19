import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionResolver, QuestionService } from "./services";


@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  providers: [
    QuestionService,
    QuestionResolver
  ]
})
export class QuestionsModule { }
