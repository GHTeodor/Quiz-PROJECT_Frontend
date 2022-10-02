import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule) },
  { path: 'questions', loadChildren: () => import('./modules').then(m => m.QuestionsModule) },
  { path: 'auth', loadChildren: () => import('./modules').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
