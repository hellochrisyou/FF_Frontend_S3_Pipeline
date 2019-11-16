import { TestBed } from '@angular/core/testing';

import { TradeTeamService } from '../trade-team.service';

describe('TradeTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradeTeamService = TestBed.get(TradeTeamService);
    expect(service).toBeTruthy();
  });
});
