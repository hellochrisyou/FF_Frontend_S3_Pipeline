import { TestBed } from '@angular/core/testing';
import { ErrorRoutingModule } from './error-routing.module';
describe('ErrorRoutingModule', () => {
  let pipe: ErrorRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ErrorRoutingModule] });
    pipe = TestBed.get(ErrorRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
