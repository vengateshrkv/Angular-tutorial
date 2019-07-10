import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartContactComponent } from './depart-contact.component';

describe('DepartContactComponent', () => {
  let component: DepartContactComponent;
  let fixture: ComponentFixture<DepartContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
