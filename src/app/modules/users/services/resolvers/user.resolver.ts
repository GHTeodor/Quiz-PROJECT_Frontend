import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserService } from "../user.service";


@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {
  constructor(private userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const { id } = route.params;
    return this.userService.getById(id);
  }
}
