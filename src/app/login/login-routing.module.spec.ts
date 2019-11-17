import { TestBed } from '@angular/core/testing';
import { LoginRoutingModule } from './login-routing.module';
describe('LoginRoutingModule', () => {
  let pipe: LoginRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoginRoutingModule] });
    pipe = TestBed.get(LoginRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
