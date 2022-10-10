import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { Question } from "../interfaces";
import {DataService} from "../../../shared";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private readonly http: HttpClient,
              private readonly dataService: DataService) { }

  getAll(): Observable<Question[]> {
    let token;
    this.dataService.auth_token.subscribe(accessToken => token = accessToken);

    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    };

    return this.http.get<Question[]>(urls.questions, header).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
