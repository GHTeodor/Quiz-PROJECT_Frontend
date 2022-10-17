import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { MailKitService } from "../../services";

@Component({
  selector: 'app-send-to-confirm-email',
  templateUrl: './send-to-confirm-email.component.html',
  styleUrls: ['./send-to-confirm-email.component.scss']
})
export class SendToConfirmEmailComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  email: string = "";
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private readonly fb: FormBuilder,
              private readonly mailKitService: MailKitService,
              private readonly _snackBar: MatSnackBar) {  }

  ngOnInit(): void {
    this.form = this.fb.group({ email: ['', [Validators.required, Validators.email]] });
  }

  confirm(): void {
    this.email = this.form.value.email;

    this.mailKitService.confirmEmail(this.email)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => console.log(value));

    this._snackBar.open(`Please, check your email: ${this.email} 📧`);
  }

  getErrorMessage(): string {
    if (this.form.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnDestroy(): void {
    this._snackBar.dismiss();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
