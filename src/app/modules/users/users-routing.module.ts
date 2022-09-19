import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from "./components/users/users.component";
import { UserResolver } from "./services";

const routes: Routes = [
  { path: '', component: UsersComponent, resolve: { usersData: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
