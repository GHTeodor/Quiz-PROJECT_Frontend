import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";

import {UpdateUser, User} from "../../interfaces";
import { UserService } from "../../services";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  updatedUser!: UpdateUser;
  private user!: User
  errorEmail!: any;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();
  private id!: number;

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly userService: UserService) {  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(({id}) => {
      this.id = id
      this._createForm();
    });
  }

  private _createForm(): void {
    this.userService.getById(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe(user => {
      this.user = user;
      console.log(this.user);

      this.form = new FormGroup({
        firstName: new FormControl(this.user?.firstName, [Validators.required, Validators.maxLength(20)]),
        lastName: new FormControl(this.user.lastName, [Validators.maxLength(20)]),
        username: new FormControl(this.user.userName, [Validators.required, Validators.maxLength(20)]),
        email: new FormControl(this.user.email, [Validators.required, Validators.maxLength(20)]),
        phone: new FormControl(this.user.phone, [Validators.required, Validators.maxLength(20)]),
        password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
        confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
        age: new FormControl(this.user?.age, [Validators.min(0), Validators.max(125)])
      });
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.updatedUser = {
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        username: this.form.get('username')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        age: this.form.get('age')?.value
      }

      this.userService.updateById(this.id, this.updatedUser)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => {
          console.log(value);
        });
      // this.router.navigate(['users']);

      this.form.reset();
    }
  }

  delete(): void {
    this.userService.deleteById(this.id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => console.log(value));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
