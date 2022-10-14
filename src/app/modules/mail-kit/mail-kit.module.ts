import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailKitRoutingModule } from './mail-kit-routing.module';
import { SendToConfirmEmailComponent } from './components/send-to-confirm-email/send-to-confirm-email.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SendToConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    MailKitRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MailKitModule { }
