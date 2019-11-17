import { TestBed } from '@angular/core/testing';
import { RoutingModule } from './app-routing.module';
describe('RoutingModule', () => {
  let pipe: RoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RoutingModule] });
    pipe = TestBed.get(RoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
