import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UpdateComponent } from './components/update/update.component';
import { RefreshComponent } from './components/refresh/refresh.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    UpdateUserComponent,
    UpdateComponent,
    RefreshComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
