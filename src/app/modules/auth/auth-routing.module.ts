import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefreshComponent } from "./components/refresh/refresh.component";

import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { DecodeTokenComponent } from "./components/decode-token/decode-token.component";
import { DecodeTokenResolver, LogoutResolver, RefreshResolver } from "./services";

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'refresh', component: RefreshComponent, resolve: { refreshData: RefreshResolver } },
  { path: 'logout', component: LogoutComponent , resolve: { logoutData: LogoutResolver } },
  { path: 'decode-token', component: DecodeTokenComponent, resolve: { decodeTokenData: DecodeTokenResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
