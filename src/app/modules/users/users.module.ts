import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UsersResolver, UserService } from "./services";
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [
    UserService,
    UsersResolver
  ]
})
export class UsersModule { }
