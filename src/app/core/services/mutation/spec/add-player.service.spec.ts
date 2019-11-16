import { TestBed } from '@angular/core/testing';

import { AddPlayerMutateService } from '../add-player-mutate.service';

describe('AddPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlayerMutateService = TestBed.get(AddPlayerMutateService);
    expect(service).toBeTruthy();
  });
});
