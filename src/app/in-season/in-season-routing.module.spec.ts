import { TestBed } from '@angular/core/testing';
import { InSeasonRoutingModule } from './in-season-routing.module';
describe('InSeasonRoutingModule', () => {
  let pipe: InSeasonRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [InSeasonRoutingModule] });
    pipe = TestBed.get(InSeasonRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
