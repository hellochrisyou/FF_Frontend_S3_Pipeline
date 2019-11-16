import { TestBed } from '@angular/core/testing';
import { AuthenticateService } from '@core';
describe('AuthenticateService', () => {
  let service: AuthenticateService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthenticateService] });
    service = TestBed.get(AuthenticateService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
