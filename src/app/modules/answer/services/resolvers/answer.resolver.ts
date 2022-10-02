import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import {AnswerService} from "../answer.service";

@Injectable({
  providedIn: 'root'
})
export class AnswerResolver implements Resolve<any> {
  constructor(private answerService: AnswerService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.answerService.getAll();
  }
}
