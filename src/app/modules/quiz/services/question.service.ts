import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { Question } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(urls.questions).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${urls.questions}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(urls.questions, question);
  }

  updateQuestionById(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${urls.questions}/${id}`, question);
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete<string>(`${urls.questions}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
