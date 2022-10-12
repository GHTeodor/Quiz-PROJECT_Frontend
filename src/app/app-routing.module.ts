import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page404Component } from "./components/page404/page404.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule) },
  { path: 'questions', loadChildren: () => import('./modules').then(m => m.QuestionsModule) },
  { path: 'auth', loadChildren: () => import('./modules').then(m => m.AuthModule) },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
