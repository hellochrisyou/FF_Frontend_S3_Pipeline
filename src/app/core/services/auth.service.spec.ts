import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    const apolloStub = { getClient: () => ({ resetStore: () => ({}) }) };
    const routerStub = { navigate: array => ({}) };
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Apollo, useValue: apolloStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    service = TestBed.get(AuthService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('autoLogin', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.get(Router);
      spyOn(component, 'setAccountName').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      service.autoLogin();
      expect(service.setAccountName).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const apolloStub: Apollo = TestBed.get(Apollo);
      spyOn(apolloStub, 'getClient').and.callThrough();
      service.logout();
      expect(apolloStub.getClient).toHaveBeenCalled();
    });
  });
});
