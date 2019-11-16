import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddPlayerService, LeagueService, CloseDialogService, NotifyService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { WrTableComponent } from '@shared/component';
describe('WrTableComponent', () => {
  let component: WrTableComponent;
  let fixture: ComponentFixture<WrTableComponent>;
  beforeEach(() => {
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      wrDraftComplete: { subscribe: () => ({}) },
      wrWaiverComplete: { subscribe: () => ({}) }
    };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [WrTableComponent],
      providers: [
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(WrTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('wrCol defaults to: global.wrCol', () => {
    expect(component.wrCol).toEqual(global.wrCol);
  });
});
