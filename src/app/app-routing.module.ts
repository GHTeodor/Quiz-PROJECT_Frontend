import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./modules').then(m => m.UsersModule) },
  { path: 'questions', loadChildren: () => import('./modules').then(m => m.QuestionsModule) },
  { path: 'answers', loadChildren: () => import('./modules').then(m => m.AnswerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
