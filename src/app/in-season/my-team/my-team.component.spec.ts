import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddPlayerService, ToggleTradeService, CloseDialogService, LeagueService, ApiService } from '@core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyTeamComponent } from '@inSeason';
describe('MyTeamComponent', () => {
  let component: MyTeamComponent;
  let fixture: ComponentFixture<MyTeamComponent>;
  beforeEach(() => {
    const apiServiceStub = {};
    const leagueServiceStub = {
      getActivePlayers: () => ({}),
      getInActivePlayers: () => ({})
    };
    const closeDialogServiceStub = {
      emitClose: { subscribe: () => ({}) },
      closeDialog: string => ({})
    };
    const addPlayerServiceStub = {
      setIsWaiver: arg => ({}),
      getDraftName: () => ({})
    };
    const toggleTradeServiceStub = {
      setIsTrade: arg => ({}),
      setIsActive: arg => ({})
    };
    const routerStub = { navigate: array => ({}) };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MyTeamComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: ToggleTradeService, useValue: toggleTradeServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(MyTeamComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('playerCol defaults to: _globals.playerCol', () => {
    expect(component.playerCol).toEqual(_globals.playerCol);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      const addPlayerServiceStub: AddPlayerService = fixture.debugElement.injector.get(
        AddPlayerService
      );
      spyOn(leagueServiceStub, 'getActivePlayers').and.callThrough();
      spyOn(leagueServiceStub, 'getInActivePlayers').and.callThrough();
      spyOn(addPlayerServiceStub, 'setIsWaiver').and.callThrough();
      component.ngOnInit();
      expect(leagueServiceStub.getActivePlayers).toHaveBeenCalled();
      expect(leagueServiceStub.getInActivePlayers).toHaveBeenCalled();
      expect(addPlayerServiceStub.setIsWaiver).toHaveBeenCalled();
    });
  });
  describe('successPopup', () => {
    it('makes expected calls', () => {
      const closeDialogServiceStub: CloseDialogService = fixture.debugElement.injector.get(
        CloseDialogService
      );
      const addPlayerServiceStub: AddPlayerService = fixture.debugElement.injector.get(
        AddPlayerService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(closeDialogServiceStub, 'closeDialog').and.callThrough();
      spyOn(addPlayerServiceStub, 'getDraftName').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.successPopup();
      expect(closeDialogServiceStub.closeDialog).toHaveBeenCalled();
      expect(addPlayerServiceStub.getDraftName).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
