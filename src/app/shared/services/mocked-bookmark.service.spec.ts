import { TestBed, inject } from '@angular/core/testing';

import { MockedBookmarkService } from './mocked-bookmark.service';

describe('MockedBookmarkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockedBookmarkService]
    });
  });

  it('should be created', inject([MockedBookmarkService], (service: MockedBookmarkService) => {
    expect(service).toBeTruthy();
  }));
});
