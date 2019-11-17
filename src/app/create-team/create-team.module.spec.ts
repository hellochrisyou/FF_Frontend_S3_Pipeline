import { TestBed } from '@angular/core/testing';
import { CreateTeamModule } from './create-team.module';
describe('CreateTeamModule', () => {
  let pipe: CreateTeamModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateTeamModule] });
    pipe = TestBed.get(CreateTeamModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
