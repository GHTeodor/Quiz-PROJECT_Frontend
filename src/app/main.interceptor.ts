import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from "./modules/auth/services";
import { environment } from "../environments/environment";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private readonly authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.getAccessToken() && request.url.startsWith(environment.baseURL)) {
      request = this._addToken(request, this.authService.getAccessToken());
    }

    return next.handle(request);
  }

  private _addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
}
