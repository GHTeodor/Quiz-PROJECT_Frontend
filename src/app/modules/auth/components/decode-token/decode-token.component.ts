import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";

import { AuthService } from "../../services";

@Component({
  selector: 'app-decode-token',
  templateUrl: './decode-token.component.html',
  styleUrls: ['./decode-token.component.scss']
})
export class DecodeTokenComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.authService.decodeToken()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
