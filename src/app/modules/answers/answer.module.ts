import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerRoutingModule } from './answer-routing.module';
import { AnswersComponent } from './components/answers/answers.component';
import { AnswerResolver, AnswerService } from "./services";


@NgModule({
  declarations: [
    AnswersComponent
  ],
  imports: [
    CommonModule,
    AnswerRoutingModule
  ],
  providers: [
    AnswerService,
    AnswerResolver
  ]
})
export class AnswerModule { }
