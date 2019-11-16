import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, AddPlayerService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { DraftTeamsComponent } from '@draft';
describe('DraftTeamsComponent', () => {
  let component: DraftTeamsComponent;
  let fixture: ComponentFixture<DraftTeamsComponent>;
  beforeEach(() => {
    const routerStub = { navigate: array => ({}) };
    const apiServiceStub = {
      httpPut: (addPlayer, dto) => ({ subscribe: () => ({}) })
    };
    const addPlayerServiceStub = {
      setIsWaiver: arg => ({}),
      draftPopUp: { subscribe: () => ({}) },
      getDraftName: () => ({})
    };
    const matDialogStub = {
      open: (submitPopupDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DraftTeamsComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(DraftTeamsComponent);
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
      spyOn(component, 'draftedPopup').and.callThrough();
      spyOn(apiServiceStub, 'httpPut').and.callThrough();
      component.ngOnInit();
      expect(component.draftedPopup).toHaveBeenCalled();
      expect(apiServiceStub.httpPut).toHaveBeenCalled();
    });
  });
  describe('draftedPopup', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const addPlayerServiceStub: AddPlayerService = fixture.debugElement.injector.get(
        AddPlayerService
      );
      const matDialogStub: MatDialog = fixture.debugElement.injector.get(
        MatDialog
      );
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(addPlayerServiceStub, 'getDraftName').and.callThrough();
      spyOn(matDialogStub, 'open').and.callThrough();
      component.draftedPopup();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(addPlayerServiceStub.getDraftName).toHaveBeenCalled();
      expect(matDialogStub.open).toHaveBeenCalled();
    });
  });
});
