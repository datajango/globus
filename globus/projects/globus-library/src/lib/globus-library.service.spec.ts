import { TestBed } from '@angular/core/testing';

import { GlobusLibraryService } from './globus-library.service';

describe('GlobusLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobusLibraryService = TestBed.get(GlobusLibraryService);
    expect(service).toBeTruthy();
  });
});
