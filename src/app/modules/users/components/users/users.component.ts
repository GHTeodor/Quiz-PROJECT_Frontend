import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";

import { UpdateUser, User } from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users!: User[];
  user!: UpdateUser;
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly userService: UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(takeUntil(this.unsubscribe$)).subscribe(( { usersData } ) => {
      this.users = usersData;
    });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(UserUpdateInModal, {
      width: '250px',
      data: {
        id: user.id,
        firstName: this.user?.firstName || user.firstName,
        lastName: this.user?.lastName || user.lastName,
        userName: this.user?.userName || user.userName,
        email: this.user?.email || user.email,
        phone: this.user?.phone || user.phone,
        password: this.user?.password,
        confirmPassword: this.user?.confirmPassword,
        age: this.user?.age || user.age,
      },
    });

    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(result => {
      if (!!result) {
        this.user = result;

        if (user.id) {
          this.userService.updateById(user.id, this.user)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(console.log);
        }
      }
    });
  }
}

@Component({
  selector: 'user-update-in-modal',
  templateUrl: 'user-update-in-modal.component.html',
})
export class UserUpdateInModal implements OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<UserUpdateInModal>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateUser,
    private readonly userService: UserService
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  update(id: number): void {
    this.userService.updateById(id, this.data).pipe(takeUntil(this.unsubscribe$))
      .subscribe(console.log);
  }

  delete(id: number): void {
    this.userService.deleteById(id).pipe(takeUntil(this.unsubscribe$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
