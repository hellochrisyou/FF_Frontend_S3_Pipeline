import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService, FilterService, DraftService, NotifyService, StatsFunctionService } from '@core';
describe('DraftService', () => {
  let service: DraftService;
  beforeEach(() => {
    const statsFunctionServiceStub = {
      returnQbStats: players => ({}),
      returnRbStats: players => ({}),
      returnWrStats: players => ({}),
      returnTeStats: players => ({}),
      returnDEFStats: players => ({}),
      returnKickerStats: players => ({})
    };
    const apiServiceStub = { httpGet: arg => ({ subscribe: () => ({}) }) };
    const filterServiceStub = { filterArray: qbArray => ({}) };
    const notifyServiceStub = {
      emitDraftRb: rbArray => ({}),
      emitDraftWr: wrArray => ({}),
      emitDraftTe: teArray => ({}),
      emitDraftDef: defArray => ({}),
      emitDraftK: kArray => ({})
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DraftService,
        { provide: StatsFunctionService, useValue: statsFunctionServiceStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: FilterService, useValue: filterServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub }
      ]
    });
    service = TestBed.get(DraftService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('setLastSeasonQB', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnQbStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftRb').and.callThrough();
      service.setLastSeasonQB();
      expect(statsFunctionServiceStub.returnQbStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftRb).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonRB', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnRbStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftWr').and.callThrough();
      service.setLastSeasonRB();
      expect(statsFunctionServiceStub.returnRbStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftWr).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonWR', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnWrStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftTe').and.callThrough();
      service.setLastSeasonWR();
      expect(statsFunctionServiceStub.returnWrStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftTe).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonTE', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnTeStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftDef').and.callThrough();
      service.setLastSeasonTE();
      expect(statsFunctionServiceStub.returnTeStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftDef).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonDEF', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnDEFStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftDef').and.callThrough();
      service.setLastSeasonDEF();
      expect(statsFunctionServiceStub.returnDEFStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftDef).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonK', () => {
    it('makes expected calls', () => {
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      spyOn(statsFunctionServiceStub, 'returnKickerStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftK').and.callThrough();
      service.setLastSeasonK();
      expect(statsFunctionServiceStub.returnKickerStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftK).toHaveBeenCalled();
    });
  });
});
