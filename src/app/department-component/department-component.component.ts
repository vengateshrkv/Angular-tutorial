import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-department-component',
  templateUrl: './department-component.component.html',
  styleUrls: ['./department-component.component.css']
})
export class DepartmentComponent implements OnInit {
  public departmentList= [];
  public selectedId;

  constructor(private route: Router, private router: ActivatedRoute) { }
  public departmentId;

  ngOnInit() {
    this.departmentList = [
      {"id": 1, "name": "Angular"},
      {"id": 2, "name": "Node"},
      {"id": 3, "name": "Java"},
      {"id": 4, "name": "Javascript"},
      {"id": 5, "name": "React"},
      {"id": 6, "name": ".Net"}
    ];

    this.router.paramMap.subscribe((params : ParamMap) => {
      this.selectedId = +params.get('id')
    })
  }

  onSelect(department) {
    this.route.navigate([department.id], {relativeTo: this.router})
  }
  iSelected(department) {
    return department.id === this.selectedId;
  }

}
