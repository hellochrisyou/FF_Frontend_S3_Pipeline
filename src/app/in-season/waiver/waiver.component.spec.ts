import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { WaiverService, CloseDialogService, AddPlayerService, ApiService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { WaiverComponent } from '@inSeason';
describe('WaiverComponent', () => {
  let component: WaiverComponent;
  let fixture: ComponentFixture<WaiverComponent>;
  beforeEach(() => {
    const routerStub = { navigate: array => ({}) };
    const apiServiceStub = {
      httpPut: (addWaiver, dto) => ({ subscribe: () => ({}) })
    };
    const addPlayerServiceStub = {
      setIsWaiver: arg => ({}),
      waiverPopUp: { subscribe: () => ({}) },
      getDraftName: () => ({})
    };
    const waiverServiceStub = { CallNflApi: () => ({}) };
    const closeDialogServiceStub = { closeDialog: string => ({}) };
    const matDialogStub = {
      open: (submitPopupDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [WaiverComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: WaiverService, useValue: waiverServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(WaiverComponent);
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
      const waiverServiceStub: WaiverService = fixture.debugElement.injector.get(
        WaiverService
      );
      spyOn(component, 'draftedPopup').and.callThrough();
      spyOn(apiServiceStub, 'httpPut').and.callThrough();
      spyOn(waiverServiceStub, 'CallNflApi').and.callThrough();
      component.ngOnInit();
      expect(component.draftedPopup).toHaveBeenCalled();
      expect(apiServiceStub.httpPut).toHaveBeenCalled();
      expect(waiverServiceStub.CallNflApi).toHaveBeenCalled();
    });
  });
  describe('draftedPopup', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const addPlayerServiceStub: AddPlayerService = fixture.debugElement.injector.get(
        AddPlayerService
      );
      const closeDialogServiceStub: CloseDialogService = fixture.debugElement.injector.get(
        CloseDialogService
      );
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(addPlayerServiceStub, 'getDraftName').and.callThrough();
      spyOn(closeDialogServiceStub, 'closeDialog').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.draftedPopup();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(addPlayerServiceStub.getDraftName).toHaveBeenCalled();
      expect(closeDialogServiceStub.closeDialog).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
