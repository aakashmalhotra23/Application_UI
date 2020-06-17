import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './server-status/status.component';
import { ServerMaintenanceComponent } from './server-maintenance/server-maintenance.component';
import { ModifyEnvironmentComponent } from './modify-environment/modify-environment.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DefaultComponent } from './TicketLayout/default/default.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"status",component:StatusComponent},
  {path:"servermaintenance",component:ServerMaintenanceComponent},
  {path:"modify",component:ModifyEnvironmentComponent},
  {path:"edit",component:EditButtonComponent},
  {path:"default",component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
