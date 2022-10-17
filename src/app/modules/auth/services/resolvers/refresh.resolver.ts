import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { AuthService } from "../auth.service";
import { TokenResponse } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class RefreshResolver implements Resolve<TokenResponse> {
  constructor(private readonly authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TokenResponse> | Promise<TokenResponse> | TokenResponse {
    return this.authService.refreshToken();
  }
}
