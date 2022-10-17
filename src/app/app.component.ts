import {Component, OnDestroy, OnInit} from '@angular/core';

import { DataService } from "./shared";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  isDark!: boolean;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly dataService: DataService) {  }

  ngOnInit(): void {
    this.dataService.isDark.pipe(takeUntil(this.unsubscribe$)).subscribe(value => this.isDark = value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
