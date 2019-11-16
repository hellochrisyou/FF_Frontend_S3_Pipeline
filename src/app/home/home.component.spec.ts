import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '@core';
import { LeagueService } from '@core';
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    const formBuilderStub = { group: object => ({}) };
    const apiServiceStub = {
      httpGet: arg => ({ subscribe: () => ({}) }),
      httpGetAll: getAllLeagues => ({ subscribe: () => ({}) })
    };
    const leagueServiceStub = {
      getUserName: () => ({}),
      setMyAccount: account => ({}),
      setAllLeagues: leagues => ({}),
      setLeagueMenu: leagues => ({}),
      setMyLeague: name => ({})
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: FormBuilder, useValue: formBuilderStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('leagues defaults to: []', () => {
    expect(component.leagues).toEqual([]);
  });
  it('leagueNames defaults to: []', () => {
    expect(component.leagueNames).toEqual([]);
  });
  it('leagueMenus defaults to: []', () => {
    expect(component.leagueMenus).toEqual([]);
  });
  it('draft defaults to: Draft', () => {
    expect(component.draft).toEqual('Draft');
  });
  it('onGoing defaults to: Ongoing', () => {
    expect(component.onGoing).toEqual('Ongoing');
  });
  it('homeCol defaults to: global.homeCol', () => {
    expect(component.homeCol).toEqual(global.homeCol);
  });
  describe('ngAfterViewInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      const apiServiceStub: ApiService = fixture.debugElement.injector.get(
        ApiService
      );
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(apiServiceStub, 'httpGetAll').and.callThrough();
      spyOn(leagueServiceStub, 'getUserName').and.callThrough();
      spyOn(leagueServiceStub, 'setMyAccount').and.callThrough();
      spyOn(leagueServiceStub, 'setAllLeagues').and.callThrough();
      spyOn(leagueServiceStub, 'setLeagueMenu').and.callThrough();
      component.ngAfterViewInit();
      expect(formBuilderStub.group).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(apiServiceStub.httpGetAll).toHaveBeenCalled();
      expect(leagueServiceStub.getUserName).toHaveBeenCalled();
      expect(leagueServiceStub.setMyAccount).toHaveBeenCalled();
      expect(leagueServiceStub.setAllLeagues).toHaveBeenCalled();
      expect(leagueServiceStub.setLeagueMenu).toHaveBeenCalled();
    });
  });
});
