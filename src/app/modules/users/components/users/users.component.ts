import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { User } from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users!: User[];
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe(( { usersData } ) => {
      this.users = usersData;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
