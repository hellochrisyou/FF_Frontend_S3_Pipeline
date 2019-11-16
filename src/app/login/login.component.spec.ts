import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, RegisterService, AuthenticateService } from '@core';
import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    const formBuilderStub = { group: object => ({}) };
    const routerStub = { navigate: array => ({}) };
    const authenticateServiceStub = {
      mutate: object => ({ subscribe: () => ({}) })
    };
    const authServiceStub = {
      setAccountName: myAccountName => ({}),
      saveUserData: (myAccountName, token) => ({})
    };
    const registerServiceStub = {
      mutate: object => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: Router, useValue: routerStub },
        { provide: AuthenticateService, useValue: authenticateServiceStub },
        { provide: AuthService, useValue: authServiceStub },
        { provide: RegisterService, useValue: registerServiceStub }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('condition defaults to: true', () => {
    expect(component.condition).toEqual(true);
  });
  it('submitted defaults to: false', () => {
    expect(component.submitted).toEqual(false);
  });
  it('loggedIn defaults to: false', () => {
    expect(component.loggedIn).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
});
