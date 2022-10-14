import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { DecodeTokenComponent } from './components/decode-token/decode-token.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    RefreshComponent,
    DecodeTokenComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class AuthModule { }
