import { TestBed } from '@angular/core/testing';
import { CreateLeagueModule } from './create-league.module';
describe('CreateLeagueModule', () => {
  let pipe: CreateLeagueModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CreateLeagueModule] });
    pipe = TestBed.get(CreateLeagueModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
