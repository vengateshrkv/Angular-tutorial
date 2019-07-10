import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './Child/child.component'
import { EmployeeListComponent } from './EmployeeList/employee.component'
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './app.service';
import { DepartmentComponent } from './department-component/department-component.component';
import { EmployeeComponent } from './employee-component/employee-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartOverviewComponent } from './depart-overview/depart-overview.component';
import { DepartContactComponent } from './depart-contact/depart-contact.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeListComponent,
    DepartmentComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartOverviewComponent,
    DepartContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
