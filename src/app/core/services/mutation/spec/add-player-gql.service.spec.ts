import { TestBed } from '@angular/core/testing';

import { AddPlayerGQLService } from '../add-player-gql.service';

describe('AddPlayerGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPlayerGQLService = TestBed.get(AddPlayerGQLService);
    expect(service).toBeTruthy();
  });
});
