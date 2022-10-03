import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class RefreshResolver implements Resolve<any> {
  constructor(private readonly authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.refreshToken();
  }
}
