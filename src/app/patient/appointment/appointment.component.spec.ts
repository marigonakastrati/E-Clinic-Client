import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentComponent } from './appointment.component';

describe('PatientAppointmentComponent', () => {
  let component: PatientAppointmentComponent;
  let fixture: ComponentFixture<PatientAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
