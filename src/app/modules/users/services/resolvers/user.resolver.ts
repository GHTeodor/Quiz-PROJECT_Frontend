import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { UserService } from "../user.service";
import { User } from "../../interfaces";


@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private readonly userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
      const { id } = route.params;
      return this.userService.getById(id);
  }
}
