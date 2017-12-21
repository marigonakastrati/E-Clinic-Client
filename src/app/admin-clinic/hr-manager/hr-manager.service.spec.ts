import { TestBed, inject } from '@angular/core/testing';

import { HrManagerService } from './hr-manager.service';

describe('HrManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrManagerService]
    });
  });

  it('should be created', inject([HrManagerService], (service: HrManagerService) => {
    expect(service).toBeTruthy();
  }));
});
