import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class RefreshResolver implements Resolve<any> {
  constructor(private authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const { id } = route.params;
    return this.authService.refreshToken(id);
  }
}
