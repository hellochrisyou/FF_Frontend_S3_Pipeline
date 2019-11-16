import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from '../core/services/api/api.service';
import { LeagueService } from '../core/services/model/league.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateTeamComponent } from './create-team.component';
describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;
  beforeEach(() => {
    const apiServiceStub = {
      httpPost: (createTeam, dto) => ({ subscribe: () => ({}) })
    };
    const leagueServiceStub = {
      getAllLeagueNames: () => ({}),
      findTeamNameExist: teamName => ({}),
      getMyAccount: () => ({ accountName: {} }),
      updateMyAccount: myAccount => ({})
    };
    const formBuilderStub = { group: object => ({}) };
    const matDialogStub = {
      open: (submitPopupDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    };
    const routerStub = { navigate: array => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreateTeamComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: MatDialog, useValue: matDialogStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('helmet2 defaults to: red', () => {
    expect(component.helmet2).toEqual('red');
  });
  it('redHelmet2 defaults to: true', () => {
    expect(component.redHelmet2).toEqual(true);
  });
  it('orangeHelmet2 defaults to: true', () => {
    expect(component.orangeHelmet2).toEqual(true);
  });
  it('goldHelmet2 defaults to: true', () => {
    expect(component.goldHelmet2).toEqual(true);
  });
  it('blackHelmet2 defaults to: true', () => {
    expect(component.blackHelmet2).toEqual(true);
  });
  it('greyHelmet2 defaults to: true', () => {
    expect(component.greyHelmet2).toEqual(true);
  });
  it('greenHelmet2 defaults to: true', () => {
    expect(component.greenHelmet2).toEqual(true);
  });
  it('blueHelmet2 defaults to: true', () => {
    expect(component.blueHelmet2).toEqual(true);
  });
  it('purpleHelmet2 defaults to: true', () => {
    expect(component.purpleHelmet2).toEqual(true);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(leagueServiceStub, 'getAllLeagueNames').and.callThrough();
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      expect(leagueServiceStub.getAllLeagueNames).toHaveBeenCalled();
      expect(formBuilderStub.group).toHaveBeenCalled();
    });
  });
  describe('createdPopup2', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(matDialogStub, 'open').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      component.createdPopup2();
      expect(matDialogStub.open).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
