import { TestBed, inject } from '@angular/core/testing';

import { PatientProfileService } from './profile.service';

describe('PatientProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientProfileService]
    });
  });

  it('should be created', inject([PatientProfileService], (service: PatientProfileService) => {
    expect(service).toBeTruthy();
  }));
});
