import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { Registration } from "../../interfaces";
import { AuthService } from "../../services";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  registration!: Registration;
  errorEmail!: any;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly router: Router,
              private readonly authService: AuthService) {  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl("User", [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl("Main", [Validators.maxLength(20)]),
      username: new FormControl("First", [Validators.required, Validators.maxLength(20)]),
      email: new FormControl("__________.Lviv@ukr.net", [Validators.required, Validators.maxLength(20)]),
      phone: new FormControl("+38(098)7654321", [Validators.required, Validators.maxLength(20)]),
      password: new FormControl("nullnull", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
      confirmPassword: new FormControl("nullnull", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
      age: new FormControl(1, [Validators.min(0), Validators.max(125)])
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.registration = {
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        username: this.form.get('username')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        age: this.form.get('age')?.value
      }

      this.authService.registration(this.registration)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => this.router.navigate(['auth/login']));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
