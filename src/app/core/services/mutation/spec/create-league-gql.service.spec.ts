import { TestBed } from '@angular/core/testing';

import { CreateLeagueGQLService } from '../create-league-gql.service';

describe('CreateLeagueGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateLeagueGQLService = TestBed.get(CreateLeagueGQLService);
    expect(service).toBeTruthy();
  });
});
