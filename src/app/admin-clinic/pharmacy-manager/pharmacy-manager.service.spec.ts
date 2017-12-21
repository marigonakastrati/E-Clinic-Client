import { TestBed, inject } from '@angular/core/testing';

import { PharmacyManagerService } from './pharmacy-manager.service';

describe('PharmacyManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmacyManagerService]
    });
  });

  it('should be created', inject([PharmacyManagerService], (service: PharmacyManagerService) => {
    expect(service).toBeTruthy();
  }));
});
