import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutResolver implements Resolve<object> {
  constructor(private readonly authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> | Promise<object> | object {
    return this.authService.logout();
  }
}
