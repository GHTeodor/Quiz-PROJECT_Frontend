import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Login } from "../../interfaces";
import { AuthService } from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public login!: Login;
  public token!: any;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.form = new FormGroup({
      login: new FormControl("user@example.com", [Validators.required, Validators.maxLength(80)]),
      password: new FormControl("string", [Validators.required, Validators.maxLength(80)])
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.login = {
        email: this.form.get('login')?.value,
        password: this.form.get('password')?.value
      }

      this.authService.login(this.login).subscribe(value => {
        this.token = value;
        console.log("Token:\n", this.token);
      });

      //this.router.navigate(['users']);

      this.form.reset();
    }
  }
}
