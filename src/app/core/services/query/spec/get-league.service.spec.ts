import { TestBed } from '@angular/core/testing';
import { GetLeagueService } from '../get-league.service';
describe('GetLeagueService', () => {
  let service: GetLeagueService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [GetLeagueService] });
    service = TestBed.get(GetLeagueService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
