import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Registration } from "../../interfaces";
import { AuthService } from "../../services";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;
  public registration!: Registration;
  public errorEmail!: any;

  constructor(private router: Router,
              private authService: AuthService) {  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl("null", [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl("null", [Validators.maxLength(20)]),
      username: new FormControl("null", [Validators.required, Validators.maxLength(20)]),
      email: new FormControl("null@i.ua", [Validators.required, Validators.maxLength(20)]),
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

      this.authService.registration(this.registration).subscribe(value => {
        console.log(value);
        // next: () => this.router.navigate(['login']),
        // error: err => this.errorEmail = err.error()
      });
      // this.router.navigate(['users']);

      this.form.reset();
    }
  }
}
