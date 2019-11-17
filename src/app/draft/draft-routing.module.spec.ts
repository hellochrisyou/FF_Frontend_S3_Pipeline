import { TestBed } from '@angular/core/testing';
import { DraftRoutingModule } from './draft-routing.module';
describe('DraftRoutingModule', () => {
  let pipe: DraftRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DraftRoutingModule] });
    pipe = TestBed.get(DraftRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
