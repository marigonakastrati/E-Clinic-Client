import { TestBed, inject } from '@angular/core/testing';

import { ClinicManagerService } from './clinic-manager.service';

describe('ClinicManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicManagerService]
    });
  });

  it('should be created', inject([ClinicManagerService], (service: ClinicManagerService) => {
    expect(service).toBeTruthy();
  }));
});
