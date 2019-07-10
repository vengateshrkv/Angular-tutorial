import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '../app.service'

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html'
})

export class EmployeeListComponent implements OnInit {
    public employeeList = [];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        
       this.employeeService.getEmployeeList().subscribe(function(data){
        this.employeeList = data;
        console.log(this.employeeList)
       },
        function(error){
            console.log(error.message)
        });
    }
}