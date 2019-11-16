import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CloseDialogService, NotifyService, AddPlayerService, LeagueService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { RbTableComponent } from '@shared/component';
describe('RbTableComponent', () => {
  let component: RbTableComponent;
  let fixture: ComponentFixture<RbTableComponent>;
  beforeEach(() => {
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      rbDraftComplete: { subscribe: () => ({}) },
      rbWaiverComplete: { subscribe: () => ({}) }
    };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RbTableComponent],
      providers: [
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(RbTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('rbCol defaults to: global.rbCol', () => {
    expect(component.rbCol).toEqual(global.rbCol);
  });
});
