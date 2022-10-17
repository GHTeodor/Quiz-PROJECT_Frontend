import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent, UserUpdateInModal } from './components/users/users.component';
import { UsersResolver, UserService } from "./services";
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserUpdateInModal
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    UserService,
    UsersResolver
  ]
})
export class UsersModule { }
