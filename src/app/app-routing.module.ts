import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department-component/department-component.component'
import { EmployeeComponent } from './employee-component/employee-component.component'
import { DepartmentDetailComponent } from './department-detail/department-detail.component'
import { DepartOverviewComponent } from 'src/app/depart-overview/depart-overview.component';
import { DepartContactComponent } from 'src/app/depart-contact/depart-contact.component';


const routes: Routes = [
  { path:"department", component: DepartmentComponent },
  { 
    path:"department/:id", 
    component: DepartmentDetailComponent,
    children:[
      {
        path : 'overview',
        component: DepartOverviewComponent
      },
      {
        path: 'content',
        component: DepartContactComponent
      }
    ]
  },
  { path:"employee", component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
