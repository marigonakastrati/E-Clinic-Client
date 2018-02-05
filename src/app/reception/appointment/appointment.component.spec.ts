import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptioniAppointmentComponent } from './appointment.component';

describe('ReceptioniAppointmentComponent', () => {
  let component: ReceptioniAppointmentComponent;
  let fixture: ComponentFixture<ReceptioniAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptioniAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptioniAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
