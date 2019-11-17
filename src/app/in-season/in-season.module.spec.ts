import { TestBed } from '@angular/core/testing';
import { InSeasonModule } from './in-season.module';
describe('InSeasonModule', () => {
  let pipe: InSeasonModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [InSeasonModule] });
    pipe = TestBed.get(InSeasonModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
