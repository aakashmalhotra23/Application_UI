import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { Server } from 'http';
import {HttpModule} from '@angular/http';
import { RestapiService } from './restapi.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './server-status/status.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';
import { ModifyEnvironmentComponent } from './modify-environment/modify-environment.component';
import { ServerDbService } from './shared_service/server-db.service';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { EditButtonComponent } from './edit-button/edit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StatusComponent,
    ServerMaintenanceComponent,
    ModifyEnvironmentComponent,
    EditButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [RestapiService,ServerDbService,{provide: ErrorHandler, useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
