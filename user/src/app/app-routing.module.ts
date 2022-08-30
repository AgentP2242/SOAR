import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorityloginComponent } from './authoritylogin/authoritylogin.component';
import { AuthoritysignupComponent } from './authoritysignup/authoritysignup.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { InfraAdminComponent } from './infra-admin/infra-admin.component';
import { ManagerComponent } from './manager/manager.component';
import { SoftDevComponent } from './soft-dev/soft-dev.component';

const routes: Routes = [
  {path:'',component:AuthorityloginComponent},
  {path:'signup',component:AuthoritysignupComponent},
  {path:'infra-admin',component:InfraAdminComponent},
  {path:'soft-dev',component:SoftDevComponent},
  {path:'manager',component:ManagerComponent},
  {path:'employee-admin',component:EmployeeAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
