import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SendToConfirmEmailComponent } from "./components/send-to-confirm-email/send-to-confirm-email.component";

const routes: Routes = [
  { path: '', component: SendToConfirmEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailKitRoutingModule { }
