import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CloseDialogService, NotifyService, AddPlayerService, LeagueService } from '@core';
import { MatDialog } from '@angular/material/dialog';
import { DefenseTableComponent } from './defense-table.component';
describe('DefenseTableComponent', () => {
  let component: DefenseTableComponent;
  let fixture: ComponentFixture<DefenseTableComponent>;
  beforeEach(() => {
    const leagueServiceStub = { updateDto: myPlayer => ({}) };
    const addPlayerServiceStub = { addDraftPlayer: (arg, name) => ({}) };
    const closeDialogServiceStub = { emitClose: { subscribe: () => ({}) } };
    const notifyServiceStub = {
      defDraftComplete: { subscribe: () => ({}) },
      defWaiverComplete: { subscribe: () => ({}) }
    };
    const matDialogStub = {
      open: (myTeamDialog, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) }),
        close: () => ({})
      })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DefenseTableComponent],
      providers: [
        { provide: LeagueService, useValue: leagueServiceStub },
        { provide: AddPlayerService, useValue: addPlayerServiceStub },
        { provide: CloseDialogService, useValue: closeDialogServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: MatDialog, useValue: matDialogStub }
      ]
    });
    fixture = TestBed.createComponent(DefenseTableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('defCol defaults to: globals.defCol', () => {
    expect(component.defCol).toEqual(globals.defCol);
  });
});
