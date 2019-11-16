import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LeagueService } from '@core';
import { MyDraftTeamComponent } from '@draft';
import * as global from '@shared/var/globals'
describe('MyDraftTeamComponent', () => {
  let component: MyDraftTeamComponent;
  let fixture: ComponentFixture<MyDraftTeamComponent>;
  beforeEach(() => {
    const leagueServiceStub = { getMyPlayers: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MyDraftTeamComponent],
      providers: [{ provide: LeagueService, useValue: leagueServiceStub }]
    });
    fixture = TestBed.createComponent(MyDraftTeamComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('playerCol defaults to: global.playerCol', () => {
    expect(component.playerCol).toEqual(global.playerCol);
  });
  it('myPlayers defaults to: []', () => {
    expect(component.myPlayers).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      spyOn(leagueServiceStub, 'getMyPlayers').and.callThrough();
      component.ngOnInit();
      expect(leagueServiceStub.getMyPlayers).toHaveBeenCalled();
    });
  });
});
