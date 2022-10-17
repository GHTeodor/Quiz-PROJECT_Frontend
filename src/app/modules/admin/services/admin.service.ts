import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";

import { urls } from "../../../constants";
import { AdminCharts } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly http: HttpClient) { }

  chartsInfo(): Observable<AdminCharts> {
    return this.http.get<AdminCharts>(urls.admin).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
