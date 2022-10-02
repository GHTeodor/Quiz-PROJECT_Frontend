import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { Login, Registration } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  registration(registrationData: Registration): Observable<any> {
    return this.httpClient.post<any>(urls.registration, registrationData).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  login(loginData: Login): Observable<any> {
    return this.httpClient.post<any>(urls.login, loginData).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  refreshToken(id: number): Observable<any> {
    return this.httpClient.post(urls.refresh, id).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  logout(): Observable<any> {
    return this.httpClient.delete(urls.logout).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  updateById(id: number, updatedUser: any): Observable<any> {
    return this.httpClient.put(`${urls.update}/${id}`, updatedUser).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
