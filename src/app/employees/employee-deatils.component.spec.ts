import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeatilsComponent } from './employee-deatils.component';

describe('EmployeeDeatilsComponent', () => {
  let component: EmployeeDeatilsComponent;
  let fixture: ComponentFixture<EmployeeDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
