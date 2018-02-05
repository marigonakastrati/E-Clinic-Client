import { TestBed, inject } from '@angular/core/testing';

import { ReceptionistProfileService } from './profile.service';

describe('ReceptionistProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceptionistProfileService]
    });
  });

  it('should be created', inject([ReceptionistProfileService], (service: ReceptionistProfileService) => {
    expect(service).toBeTruthy();
  }));
});
