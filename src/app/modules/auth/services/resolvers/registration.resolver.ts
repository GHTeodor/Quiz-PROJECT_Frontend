import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationResolver implements Resolve<any> {
  constructor(private authService: AuthService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log("ROUTE DATA ============================\n");
    console.log(route.data);
    console.log("ROUTE DATA ============================\n");

    const { loginData } = route.params;
    return this.authService.registration(loginData);
  }
}
