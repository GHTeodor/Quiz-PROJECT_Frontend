import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from "./components/page404/page404.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule) },
  { path: 'questions', loadChildren: () => import('./modules').then(m => m.QuestionsModule) },
  { path: 'auth', loadChildren: () => import('./modules').then(m => m.AuthModule) },
  { path: 'mailkit', loadChildren: () => import('./modules').then(m => m.MailKitModule) },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
