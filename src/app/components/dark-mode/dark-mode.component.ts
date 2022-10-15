import { Component, OnInit } from '@angular/core';

import { DataService } from "../../shared";

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  isDark: boolean = false;

  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
  }

  darkMode(): void {
    this.isDark = !this.isDark;
    this.dataService.isDark.next(this.isDark);
  }
}
