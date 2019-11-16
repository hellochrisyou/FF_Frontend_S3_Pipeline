import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddPlayerService } from '@core';
import { LeagueService } from '@core';
import { CloseDialogService } from '@core';
import { NotifyService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { KickerTableComponent } from './kicker-table.component';
describe('KickerTableComponent', () => {
  let component: KickerTableComponent;
  let fixture: ComponentFixture<KickerTableComponent>;
  beforeEach(() => {
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      kDraftComplete: { subscribe: () => ({}) },
      kWaiverComplete: { subscribe: () => ({}) }
    };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [KickerTableComponent],
      providers: [
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(KickerTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('kCol defaults to: global.kCol', () => {
    expect(component.kCol).toEqual(global.kCol);
  });
});
