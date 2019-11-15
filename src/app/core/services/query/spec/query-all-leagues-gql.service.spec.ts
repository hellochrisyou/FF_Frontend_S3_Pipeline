import { TestBed } from '@angular/core/testing';

import { QueryAllLeaguesGQLService } from '../query-all-leagues-gql.service';

describe('QueryAllLeaguesGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryAllLeaguesGQLService = TestBed.get(QueryAllLeaguesGQLService);
    expect(service).toBeTruthy();
  });
});
