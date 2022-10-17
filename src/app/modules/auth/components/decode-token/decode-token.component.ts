import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { UserTokenInfo } from "../../interfaces";

@Component({
  selector: 'app-decode-token',
  templateUrl: './decode-token.component.html',
  styleUrls: ['./decode-token.component.scss']
})
export class DecodeTokenComponent implements OnInit, OnDestroy {
  userInfo!: UserTokenInfo;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({decodeTokenData}) =>
        this.userInfo = decodeTokenData);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
