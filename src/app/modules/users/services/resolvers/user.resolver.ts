import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.getAll();
  }
}
