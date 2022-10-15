import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

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
    private readonly mailKitService: MailKitService) { }

  ngOnInit(): void {
    this.form = this.fb.group({email: ['']});
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  confirm(): void {
    this.email = this.form.value.email;

    this.mailKitService.confirmEmail(this.email)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(value => console.log(value));
  }
}
