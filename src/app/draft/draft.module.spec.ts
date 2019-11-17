import { TestBed } from '@angular/core/testing';
import { DraftModule } from './draft.module';
describe('DraftModule', () => {
  let pipe: DraftModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DraftModule] });
    pipe = TestBed.get(DraftModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
