import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { MaterialModule } from '../../shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminChartsComponent } from './components/admin-charts/admin-charts.component';

@NgModule({
  declarations: [
    AdminChartsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxEchartsModule,
    MaterialModule
  ]
})
export class AdminModule { }
