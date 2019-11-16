import { TestBed } from '@angular/core/testing';

import { GetAllLeaguesService } from '../get-all-leagues.service';

describe('GetAllLeaguesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllLeaguesService = TestBed.get(GetAllLeaguesService);
    expect(service).toBeTruthy();
  });
});
