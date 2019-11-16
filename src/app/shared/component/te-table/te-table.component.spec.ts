import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CloseDialogService, NotifyService, LeagueService, AddPlayerService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { TeTableComponent } from '@shared/component';
import * as global from '@shared/var/globals'

describe('TeTableComponent', () => {
  let component: TeTableComponent;
  let fixture: ComponentFixture<TeTableComponent>;
  beforeEach(() => {
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      teDraftComplete: { subscribe: () => ({}) },
      teWaiverComplete: { subscribe: () => ({}) }
    };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TeTableComponent],
      providers: [
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(TeTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('teCol defaults to: global.teCol', () => {
    expect(component.teCol).toEqual(global.teCol);
  });
});
