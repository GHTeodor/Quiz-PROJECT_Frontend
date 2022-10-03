import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { UserService } from "../user.service";
import { User } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

  constructor(private readonly userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
      return this.userService.getAll();
  }
}
