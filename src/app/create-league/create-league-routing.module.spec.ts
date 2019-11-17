import { TestBed } from '@angular/core/testing';
import { CreateLeagueRoutingModule } from './create-league-routing.module';
describe('CreateLeagueRoutingModule', () => {
  let pipe: CreateLeagueRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateLeagueRoutingModule] });
    pipe = TestBed.get(CreateLeagueRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
