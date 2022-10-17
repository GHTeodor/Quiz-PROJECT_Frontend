import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserTokenInfo } from "../../interfaces";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class DecodeTokenResolver implements Resolve<UserTokenInfo> {
  constructor(private readonly authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserTokenInfo> | Promise<UserTokenInfo> | UserTokenInfo {
    return this.authService.decodeToken();
  }
}
