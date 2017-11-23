import { TestBed, inject } from '@angular/core/testing';

import { ExternalRedirectService } from './external-redirect.service';

describe('ExternalRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalRedirectService]
    });
  });

  it('should be created', inject([ExternalRedirectService], (service: ExternalRedirectService) => {
    expect(service).toBeTruthy();
  }));
});
