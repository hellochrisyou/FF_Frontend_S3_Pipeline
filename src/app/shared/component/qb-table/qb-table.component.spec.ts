import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CloseDialogService, NotifyService, AddPlayerService, LeagueService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { QbTableComponent } from './qb-table.component';
describe('QbTableComponent', () => {
  let component: QbTableComponent;
  let fixture: ComponentFixture<QbTableComponent>;
  beforeEach(() => {
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      qbDraftComplete: { subscribe: () => ({}) },
      qbWaiverComplete: { subscribe: () => ({}) }
    };
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [QbTableComponent],
      providers: [
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(QbTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('qbCol defaults to: global.qbCol', () => {
    expect(component.qbCol).toEqual(global.qbCol);
  });
});
