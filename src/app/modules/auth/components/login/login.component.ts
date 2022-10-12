import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { Login } from "../../interfaces";
import { AuthService } from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  login!: Login;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly authService: AuthService) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      login: new FormControl("Identity@gmail.com", [Validators.required, Validators.maxLength(20)]),
      password: new FormControl("string", [Validators.required, Validators.maxLength(80)])
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.login = {
        email: this.form.get('login')?.value,
        password: this.form.get('password')?.value
      }

      this.authService.login(this.login).pipe(takeUntil(this.unsubscribe$)).subscribe(token => {
        console.log(token);
        this.authService.setToken(token.accessToken);
        this.router.navigate([`users/${token.id}`]);
      });

      this.form.reset();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
