// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { WaiverData } from '../../model/interface.model';
// import { LeagueService } from '@core';
// import { AddPlayerService } from '@core';
// import { ToggleTradeService } from '@core';
// import { MyTeamDialog } from './my-team.dialog';
// describe('MyTeamDialog', () => {
//   let component: MyTeamDialog;
//   let fixture: ComponentFixture<MyTeamDialog>;
//   beforeEach(() => {
//     const matDialogRefStub = {};
//     const waiverDataStub = { player: {} };
//     const leagueServiceStub = {
//       getMyPlayers: () => ({}),
//       getInActivePlayers: () => ({}),
//       getActivePlayers: () => ({}),
//       getMyAccount: () => ({ accountName: {} }),
//       getMyLeague: () => ({ leagueName: {} }),
//       getMyTeam: () => ({ teamName: {} })
//     };
//     const addPlayerServiceStub = {
//       getIsWaiver: () => ({}),
//       addWaiverPlayer: dto => ({})
//     };
//     const toggleTradeServiceStub = {
//       getIsTrade: () => ({}),
//       getIsActive: () => ({}),
//       getOtherTeamName: () => ({}),
//       tradeSubmit: dto => ({}),
//       toggleSubmit: dto => ({})
//     };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [MyTeamDialog],
//       providers: [
//         { provide: MatDialogRef, useValue: matDialogRefStub },
//         { provide: WaiverData, useValue: waiverDataStub },
//         { provide: LeagueService, useValue: leagueServiceStub },
//         { provide: AddPlayerService, useValue: addPlayerServiceStub },
//         { provide: ToggleTradeService, useValue: toggleTradeServiceStub }
//       ]
//     });
//     fixture = TestBed.createComponent(MyTeamDialog);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('playerCol defaults to: global.playerCol', () => {
//     expect(component.playerCol).toEqual(global.playerCol);
//   });
//   it('playerArray defaults to: []', () => {
//     expect(component.playerArray).toEqual([]);
//   });
//   it('isWaiver defaults to: false', () => {
//     expect(component.isWaiver).toEqual(false);
//   });
//   it('isActive defaults to: false', () => {
//     expect(component.isActive).toEqual(false);
//   });
//   it('isTrade defaults to: false', () => {
//     expect(component.isTrade).toEqual(false);
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
//         LeagueService
//       );
//       const addPlayerServiceStub: AddPlayerService = fixture.debugElement.injector.get(
//         AddPlayerService
//       );
//       const toggleTradeServiceStub: ToggleTradeService = fixture.debugElement.injector.get(
//         ToggleTradeService
//       );
//       spyOn(leagueServiceStub, 'getMyPlayers').and.callThrough();
//       spyOn(leagueServiceStub, 'getInActivePlayers').and.callThrough();
//       spyOn(leagueServiceStub, 'getActivePlayers').and.callThrough();
//       spyOn(addPlayerServiceStub, 'getIsWaiver').and.callThrough();
//       spyOn(toggleTradeServiceStub, 'getIsTrade').and.callThrough();
//       spyOn(toggleTradeServiceStub, 'getIsActive').and.callThrough();
//       component.ngOnInit();
//       expect(leagueServiceStub.getMyPlayers).toHaveBeenCalled();
//       expect(leagueServiceStub.getInActivePlayers).toHaveBeenCalled();
//       expect(leagueServiceStub.getActivePlayers).toHaveBeenCalled();
//       expect(addPlayerServiceStub.getIsWaiver).toHaveBeenCalled();
//       expect(toggleTradeServiceStub.getIsTrade).toHaveBeenCalled();
//       expect(toggleTradeServiceStub.getIsActive).toHaveBeenCalled();
//     });
//   });
// });
