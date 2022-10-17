import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

import { AdminService } from "../admin.service";
import { AdminCharts } from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AdminChartsResolver implements Resolve<AdminCharts> {

  constructor(private readonly adminService: AdminService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdminCharts> | Promise<AdminCharts> | AdminCharts {
    return this.adminService.chartsInfo();
  }
}
