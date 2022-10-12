import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { Login, Registration, TokenResponse } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accessTokenKey: string = "accessTokenKey";

  constructor(private readonly http: HttpClient) { }

  registration(registrationData: Registration): Observable<any> {
    return this.http.post<any>(urls.registration, registrationData).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  login(loginData: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(urls.login, loginData).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  refreshToken(): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(urls.refresh, {}).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  logout(): Observable<any> {
    return this.http.delete(urls.logout).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

//  -------------------------------------------------------------------

  setToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }
}
