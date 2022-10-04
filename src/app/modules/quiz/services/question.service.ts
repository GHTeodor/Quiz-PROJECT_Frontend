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
}
