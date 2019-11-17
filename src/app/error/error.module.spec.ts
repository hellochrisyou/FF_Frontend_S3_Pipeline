import { TestBed } from '@angular/core/testing';
import { ErrorModule } from './error.module';
describe('ErrorModule', () => {
  let pipe: ErrorModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ErrorModule] });
    pipe = TestBed.get(ErrorModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
