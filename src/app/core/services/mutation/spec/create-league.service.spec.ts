import { TestBed } from '@angular/core/testing';
import { CreateLeagueService } from '../create-league.service';

describe('CreateLeagueService', () => {
  let service: CreateLeagueService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateLeagueService] });
    service = TestBed.get(CreateLeagueService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
