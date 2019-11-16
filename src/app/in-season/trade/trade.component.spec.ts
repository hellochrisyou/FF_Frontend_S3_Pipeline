import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService, CloseDialogService, LeagueService, ToggleTradeService } from '@core';
import { TradeComponent } from '@inSeason';
describe('TradeComponent', () => {
  let component: TradeComponent;
  let fixture: ComponentFixture<TradeComponent>;
  beforeEach(() => {
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    const routerStub = { navigate: array => ({}) };
    const apiServiceStub = {
      httpPut: (tradeTeam, dto) => ({ subscribe: () => ({}) })
    };
    const closeDialogServiceStub = {
      emitClose: { subscribe: () => ({}) },
      closeDialog: string => ({})
    };
    const leagueServiceStub = { getOtherTeams: () => ({}) };
    const toggleTradeServiceStub = {
      tradePopUp: { subscribe: () => ({}) },
      setOtherTeamName: teamName => ({}),
      setIsTrade: arg => ({})
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TradeComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: Router, useValue: routerStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: ToggleTradeService, useValue: toggleTradeServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TradeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = fixture.debugElement.injector.get(
        ApiService
      );
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      spyOn(component, 'successPopup').and.callThrough();
      spyOn(apiServiceStub, 'httpPut').and.callThrough();
      spyOn(leagueServiceStub, 'getOtherTeams').and.callThrough();
      component.ngOnInit();
      expect(component.successPopup).toHaveBeenCalled();
      expect(apiServiceStub.httpPut).toHaveBeenCalled();
      expect(leagueServiceStub.getOtherTeams).toHaveBeenCalled();
    });
  });
  describe('toggledPopup', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const toggleTradeServiceStub: ToggleTradeService = fixture.debugElement.injector.get(
        ToggleTradeService
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(toggleTradeServiceStub, 'setIsTrade').and.callThrough();
      component.toggledPopup();
      expect(matDialogStub.open).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(toggleTradeServiceStub.setIsTrade).toHaveBeenCalled();
    });
  });
  describe('successPopup', () => {
    it('makes expected calls', () => {
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const closeDialogServiceStub: CloseDialogService = fixture.debugElement.injector.get(
        CloseDialogService
      );
      spyOn(matDialogStub, 'open').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(closeDialogServiceStub, 'closeDialog').and.callThrough();
      component.successPopup();
      expect(matDialogStub.open).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(closeDialogServiceStub.closeDialog).toHaveBeenCalled();
    });
  });
});
