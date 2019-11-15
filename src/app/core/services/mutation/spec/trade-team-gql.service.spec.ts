import { TestBed } from '@angular/core/testing';

import { TradeTeamGQLService } from '../trade-team-gql.service';

describe('TradeTeamGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradeTeamGQLService = TestBed.get(TradeTeamGQLService);
    expect(service).toBeTruthy();
  });
});
