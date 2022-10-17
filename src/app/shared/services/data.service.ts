import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { QuizForm } from "../../modules/quiz/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  quizFormStorage = new BehaviorSubject<QuizForm>({ amount: 10 });
  isDark = new BehaviorSubject<boolean>(false);

  constructor() { }
}
