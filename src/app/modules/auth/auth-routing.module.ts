import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from "./components/update/update.component";
import { RefreshComponent } from "./components/refresh/refresh.component";

import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'refresh', component: RefreshComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'update', component: UpdateComponent, children:[
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: ':id', component: UpdateUserComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
