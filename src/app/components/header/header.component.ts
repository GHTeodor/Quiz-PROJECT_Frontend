import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../modules/auth/services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorized: boolean = false;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthorized = !!this.authService.getAccessToken();
  }
}
