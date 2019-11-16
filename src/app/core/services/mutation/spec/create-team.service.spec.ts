import { TestBed } from '@angular/core/testing';
import { CreateTeamService } from '../create-team.service';
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
