import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works! id is {{departmentId }}
      <router-outlet></router-outlet>
      <button (click)='onPrev()'>Prev</button>
      <button (click)='onNext()'>Next</button>
    </p>

    <div>
      <div (click)='goOverView()'> Overview </div>
      <div (click)='goContent()'> Content </div>
    </div>

    <br>
    <div (click)='onBack()'> Back
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.departmentId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.departmentId = +params.get('id')
    })

  }
  onPrev() {
    let prevId = this.departmentId - 1
    console.log(prevId, this.route)
    this.router.navigate(['../', prevId], {relativeTo: this.route})
  }
  onNext() {
    let nextId = this.departmentId + 1
    this.router.navigate(['../', nextId], {relativeTo: this.route})
  }
  onBack() {
    let selectedId = this.departmentId ?  this.departmentId : null;
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  goOverView() {
    this.router.navigate(['./overview'], {relativeTo: this.route})
  }
  goContent() {
    this.router.navigate(['./content'], {relativeTo: this.route})
  }

}
