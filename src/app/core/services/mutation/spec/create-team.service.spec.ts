import { TestBed } from '@angular/core/testing';
import { CreateTeamService } from '@core';
describe('CreateTeamService', () => {
  let service: CreateTeamService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateTeamService] });
    service = TestBed.get(CreateTeamService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
