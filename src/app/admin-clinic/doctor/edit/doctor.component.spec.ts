import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACEditDoctorComponent } from './doctor.component';

describe('DoctorComponent', () => {
  let component: ACEditDoctorComponent;
  let fixture: ComponentFixture<ACEditDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACEditDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACEditDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
