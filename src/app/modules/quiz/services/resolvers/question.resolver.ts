import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { QuestionService } from "../question.service";
import { Question } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question> {

  constructor(private readonly questionService: QuestionService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> | Promise<Question> | Question {
    const { id } = route.params;
    return this.questionService.getById(id);
  }
}
