import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardAppModule } from 'ng2-dashboard-demo'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
