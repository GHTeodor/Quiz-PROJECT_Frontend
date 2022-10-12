import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { UpdateUser, User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(urls.users).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${urls.users}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  updateById(id: number, updatedUser: UpdateUser): Observable<UpdateUser> {
    return this.http.put<UpdateUser>(`${urls.users}/${id}`, updatedUser).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  deleteById(id: number): Observable<string> {
    return this.http.delete<string>(`${urls.users}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
