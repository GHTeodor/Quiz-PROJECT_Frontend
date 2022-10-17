import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { Router } from "@angular/router";

import { AuthService } from "./modules/auth/services";
import { environment } from "../environments/environment";
import { TokenResponse } from "./modules/auth/interfaces";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private isRefreshing: boolean = false;

  constructor(private readonly authService: AuthService,
              private readonly router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.getAccessToken() && request.url.startsWith(environment.baseURL)) {
      request = this._addToken(request, this.authService.getAccessToken());
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res?.error) {

          this._alertError(res);

          if (res.status === 401) {
            return this._handle401Error(request, next);
          }
        }
      })
    ) as any;
  }

  private _addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  private _handle401Error(request: HttpRequest<unknown>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.authService.refreshToken().pipe(
        switchMap((token: TokenResponse) => {
          return next.handle(this._addToken(request, token.accessToken));
        }),
        catchError(() => {
          this.isRefreshing = false;
          this.authService.deleteToken();
          this.router.navigate(['auth/login']);
          return throwError(() => new Error('Token is invalid or expired'));
        })
      );
    }
  }

  private _alertError(res: HttpErrorResponse): void {
    if ([400, 401, 403, 404, 500].includes(res.status)) {
      if (res.error.Message && res.error.Desctiption) alert(`${res.error.Message} \n${res?.error?.Description}`);
      else if (res.error.Message) alert(res.error.Message);
      else if (res.error.title && res.error.errors) alert(res.error.title + JSON.stringify(res.error.errors));
      else alert(res.message);
    }
  }
}
