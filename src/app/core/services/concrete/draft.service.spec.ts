import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiService } from '../api/api.service';
import { FilterService } from '../logic/filter.service';
import { NotifyService } from '../emit/notify.service';
import { StatsFunctionService } from '../logic/stats-function.service';
import { DraftService } from './draft.service';
describe('DraftService', () => {
  let service: DraftService;
  beforeEach(() => {
    const apiServiceStub = { httpGet: arg => ({ subscribe: () => ({}) }) };
    const filterServiceStub = { filterArray: qbArray => ({}) };
    const notifyServiceStub = {
      emitDraftRb: rbArray => ({}),
      emitDraftWr: wrArray => ({}),
      emitDraftTe: teArray => ({}),
      emitDraftDef: defArray => ({}),
      emitDraftK: kArray => ({})
    };
    const statsFunctionServiceStub = {
      returnQbStats: players => ({}),
      returnRbStats: players => ({}),
      returnWrStats: players => ({}),
      returnTeStats: players => ({}),
      returnDEFStats: players => ({}),
      returnKickerStats: players => ({})
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DraftService,
        { provide: ApiService, useValue: apiServiceStub },
        { provide: FilterService, useValue: filterServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: StatsFunctionService, useValue: statsFunctionServiceStub }
      ]
    });
    service = TestBed.get(DraftService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('setLastSeasonQB', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftRb').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnQbStats').and.callThrough();
      service.setLastSeasonQB();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftRb).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnQbStats).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonRB', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftWr').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnRbStats').and.callThrough();
      service.setLastSeasonRB();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftWr).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnRbStats).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonWR', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftTe').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnWrStats').and.callThrough();
      service.setLastSeasonWR();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftTe).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnWrStats).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonTE', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftDef').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnTeStats').and.callThrough();
      service.setLastSeasonTE();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftDef).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnTeStats).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonDEF', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftDef').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnDEFStats').and.callThrough();
      service.setLastSeasonDEF();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftDef).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnDEFStats).toHaveBeenCalled();
    });
  });
  describe('setLastSeasonK', () => {
    it('makes expected calls', () => {
      const apiServiceStub: ApiService = TestBed.get(ApiService);
      const filterServiceStub: FilterService = TestBed.get(FilterService);
      const notifyServiceStub: NotifyService = TestBed.get(NotifyService);
      const statsFunctionServiceStub: StatsFunctionService = TestBed.get(
        StatsFunctionService
      );
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitDraftK').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnKickerStats').and.callThrough();
      service.setLastSeasonK();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitDraftK).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnKickerStats).toHaveBeenCalled();
    });
  });
});
