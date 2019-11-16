import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService, LeagueService } from '@core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CreateLeagueComponent } from './create-league.component';
describe('CreateLeagueComponent', () => {
  let component: CreateLeagueComponent;
  let fixture: ComponentFixture<CreateLeagueComponent>;
  beforeEach(() => {
    const apiServiceStub = {};
    const formBuilderStub = { group: object => ({}) };
    const leagueServiceStub = {};
    const matDialogStub = {
      open: (submitPopupDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    };
    const routerStub = { navigate: array => ({}) };
    const apolloStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreateLeagueComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: Router, useValue: routerStub },
        { provide: Apollo, useValue: apolloStub }
      ]
    });
    fixture = TestBed.createComponent(CreateLeagueComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('helmet defaults to: red', () => {
    expect(component.helmet).toEqual('red');
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
  describe('createdPopup', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(matDialogStub, 'open').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.createdPopup();
      expect(matDialogStub.open).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
