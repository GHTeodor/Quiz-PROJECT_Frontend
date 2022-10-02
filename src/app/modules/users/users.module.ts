import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UsersResolver, UserService } from "./services";
import {MatListModule} from "@angular/material/list";
import { UserComponent } from './components/user/user.component';
import {MatButtonModule} from "@angular/material/button";


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
