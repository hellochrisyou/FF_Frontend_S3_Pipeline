import { TestBed } from '@angular/core/testing';
import { Account } from '@shared/model/interface.model';
import { Player } from '@shared/model/interface.model';
import { FilterService } from '../logic/filter.service';
import { NotifyService } from '../emit/notify.service';
import { LeagueService } from './league.service';
describe('LeagueService', () => {
  let service: LeagueService;
  beforeEach(() => {
    const accountStub = {};
    const playerStub = {};
    const filterServiceStub = { setPlayers: (players, otherPlayers) => ({}) };
    const notifyServiceStub = { sendUserName: { emit: () => ({}) } };
    TestBed.configureTestingModule({
      providers: [
        LeagueService,
        { provide: Account, useValue: accountStub },
        { provide: Player, useValue: playerStub },
        { provide: FilterService, useValue: filterServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub }
      ]
    });
    service = TestBed.get(LeagueService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('otherPlayers defaults to: []', () => {
    expect(service.otherPlayers).toEqual([]);
  });
  it('leagueNames defaults to: []', () => {
    expect(service.leagueNames).toEqual([]);
  });
  it('myLeagueNames defaults to: []', () => {
    expect(service.myLeagueNames).toEqual([]);
  });
  it('teamNames defaults to: []', () => {
    expect(service.teamNames).toEqual([]);
  });
  it('myLeagues defaults to: []', () => {
    expect(service.myLeagues).toEqual([]);
  });
  it('ourMatchup defaults to: []', () => {
    expect(service.ourMatchup).toEqual([]);
  });
  it('leagueMenus defaults to: []', () => {
    expect(service.leagueMenus).toEqual([]);
  });
});
