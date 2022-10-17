import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared';
import { MailKitRoutingModule } from './mail-kit-routing.module';
import { SendToConfirmEmailComponent } from './components/send-to-confirm-email/send-to-confirm-email.component';

@NgModule({
  declarations: [
    SendToConfirmEmailComponent,
  ],
  imports: [
    CommonModule,
    MailKitRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MailKitModule { }
