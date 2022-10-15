import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";

import { urls } from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MailKitService {

  constructor(private readonly http: HttpClient) { }

  confirmEmail(email: string): Observable<string> {
    return this.http.get<string>(`${urls.mailKit}/${email}`).pipe(
      map(value => value),
      catchError(() => of(`Check your email: ${email}, and confirm to activate account!`))
    );
  }
}
