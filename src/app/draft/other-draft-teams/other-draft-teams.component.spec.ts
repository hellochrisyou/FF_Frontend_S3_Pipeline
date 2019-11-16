import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LeagueService } from '@core';
import { OtherDraftTeamsComponent } from '@draft';
describe('OtherDraftTeamsComponent', () => {
  let component: OtherDraftTeamsComponent;
  let fixture: ComponentFixture<OtherDraftTeamsComponent>;
  beforeEach(() => {
    const leagueServiceStub = { getOtherTeams: () => ({}) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OtherDraftTeamsComponent],
      providers: [{ provide: LeagueService, useValue: leagueServiceStub }]
    });
    fixture = TestBed.createComponent(OtherDraftTeamsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('otherTeams defaults to: []', () => {
    expect(component.otherTeams).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      spyOn(leagueServiceStub, 'getOtherTeams').and.callThrough();
      component.ngOnInit();
      expect(leagueServiceStub.getOtherTeams).toHaveBeenCalled();
    });
  });
});
