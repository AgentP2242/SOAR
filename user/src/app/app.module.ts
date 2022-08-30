import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorityloginComponent } from './authoritylogin/authoritylogin.component';
import { AuthoritysignupComponent } from './authoritysignup/authoritysignup.component';
import { FormsModule } from '@angular/forms';
import { InfraAdminComponent } from './infra-admin/infra-admin.component';
import { ManagerComponent } from './manager/manager.component';
import { SoftDevComponent } from './soft-dev/soft-dev.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorityloginComponent,
    AuthoritysignupComponent,
    InfraAdminComponent,
    ManagerComponent,
    SoftDevComponent,
    EmployeeAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
