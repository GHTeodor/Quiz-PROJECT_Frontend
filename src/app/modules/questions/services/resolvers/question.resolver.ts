import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { QuestionService } from "../question.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionResolver implements Resolve<any> {
  constructor(private questionService:QuestionService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.questionService.getAll();
  }
}
