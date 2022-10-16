import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from "./components/admin/admin.component";
import { AdminResolver } from "./services";

const routes: Routes = [
  { path: '', component: AdminComponent, resolve: { chartsData: AdminResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
