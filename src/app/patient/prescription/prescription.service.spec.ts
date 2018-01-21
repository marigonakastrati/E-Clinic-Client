import { TestBed, inject } from '@angular/core/testing';

import { PatientPrescriptionService } from './prescription.service';

describe('PatientPrescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientPrescriptionService]
    });
  });

  it('should be created', inject([PatientPrescriptionService], (service: PatientPrescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
