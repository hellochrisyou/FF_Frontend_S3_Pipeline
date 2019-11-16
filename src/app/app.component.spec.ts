import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LeagueService } from './core/services/model/league.service';
import { AuthService } from './core/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const leagueServiceStub = {};
    const authServiceStub = {};
    const formBuilderStub = { group: object => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: AuthService, useValue: authServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
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
