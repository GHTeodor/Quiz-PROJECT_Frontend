import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from "ngx-echarts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './shared';
import { MainInterceptor } from './main.interceptor';
import { Page404Component } from './components/page404/page404.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutUsDirective } from './directives';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page404Component,
    DarkModeComponent,
    LayoutComponent,
    AboutUsComponent,
    AboutUsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
