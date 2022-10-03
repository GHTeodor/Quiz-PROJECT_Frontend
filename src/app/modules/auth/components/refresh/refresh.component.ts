import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { AuthService } from "../../services";

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.authService.refreshToken().pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
