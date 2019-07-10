import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './Child/child.component'
import { EmployeeListComponent } from './EmployeeList/employee.component'
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeListComponent
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
