import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { ApiQuestion, FullApiQuestion, QuizForm } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private readonly http: HttpClient) { }

  getQuiz({amount, difficulty, category, type}: QuizForm): Observable<ApiQuestion[]> {

    let params = new HttpParams().append('amount', amount.toString());

    if (!!difficulty) {
      params = params.append('difficulty', difficulty.toString());
    }

    if (!!category) {
      params = params.append('category', category.toString());
    }

    if (!!type) {
      params = params.append('type', type.toString());
    }

    return this.http.get<FullApiQuestion>(urls.quiz, {params}).pipe(
      map(value => value.results),
      catchError(err => throwError(err))
    );
  }
}
