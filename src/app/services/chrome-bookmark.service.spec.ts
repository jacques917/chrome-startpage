import { TestBed, inject } from '@angular/core/testing';

import { ChromeBookmarkService } from './chrome-bookmark.service';

describe('ChromeBookmarkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChromeBookmarkService]
    });
  });

  it('should be created', inject([ChromeBookmarkService], (service: ChromeBookmarkService) => {
    expect(service).toBeTruthy();
  }));
});
