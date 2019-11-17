import { TestBed } from '@angular/core/testing';
import { CreateTeamRoutingModule } from './create-team-routing.module';
describe('CreateTeamRoutingModule', () => {
  let pipe: CreateTeamRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateTeamRoutingModule] });
    pipe = TestBed.get(CreateTeamRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
