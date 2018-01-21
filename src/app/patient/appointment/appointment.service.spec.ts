import { TestBed, inject } from '@angular/core/testing';

import { PatientAppointmentService } from './appointment.service';

describe('PatientAppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientAppointmentService]
    });
  });

  it('should be created', inject([PatientAppointmentService], (service: PatientAppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
