import { TestBed } from '@angular/core/testing';

import { QueryLeagueGQLService } from '../query-league-gql.service';

describe('QueryLeagueGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryLeagueGQLService = TestBed.get(QueryLeagueGQLService);
    expect(service).toBeTruthy();
  });
});
