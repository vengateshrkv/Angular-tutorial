import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartOverviewComponent } from './depart-overview.component';

describe('DepartOverviewComponent', () => {
  let component: DepartOverviewComponent;
  let fixture: ComponentFixture<DepartOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
