import { TestBed } from '@angular/core/testing';
import { TradeTeamService } from '../trade-team.service';
describe('TradeTeamService', () => {
  let service: TradeTeamService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TradeTeamService] });
    service = TestBed.get(TradeTeamService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
