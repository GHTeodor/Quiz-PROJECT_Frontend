import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserResolver, UsersResolver } from "./services";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/user/user.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";

const routes: Routes = [
  { path: '', component: UsersComponent, resolve: { usersData: UsersResolver },
    children: [ { path: ':id', component: UserComponent , resolve: { userData: UserResolver } } ] },
  { path: 'update/:id', component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
