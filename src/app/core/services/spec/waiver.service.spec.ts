import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WaiverService } from '@core';
import { ApiService } from '../api/api.service';
import { FilterService } from '../logic/filter.service';
import { NotifyService } from '../emit/notify.service';
import { StatsFunctionService } from '../logic/stats-function.service';
describe('WaiverService', () => {
  let service: WaiverService;
  beforeEach(() => {
    const statsFunctionServiceStub = {
      returnQbStats: players => ({}),
      returnRbStats: players => ({}),
      returnTeStats: players => ({}),
      returnDEFStats: players => ({}),
      returnKickerStats: players => ({})
    };
    const apiServiceStub = { httpGet: arg => ({ subscribe: () => ({}) }) };
    const filterServiceStub = { filterArray: qbArray => ({}) };
    const notifyServiceStub = {
      emitWaiverQb: qbArray => ({}),
      emitWaiverRb: rbArray => ({}),
      emitWaiverWr: wrArray => ({}),
      emitWaiverTe: teArray => ({}),
      emitWaiverDef: defArray => ({}),
      emitWaiverK: kArray => ({})
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WaiverService,
        { provide: StatsFunctionService, useValue: statsFunctionServiceStub },
        { provide: ApiService, useValue: apiServiceStub },
        { provide: FilterService, useValue: filterServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub }
      ]
    });
    service = TestBed.get(WaiverService);
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
      spyOn(notifyServiceStub, 'emitWaiverQb').and.callThrough();
      service.setLastSeasonQB();
      expect(statsFunctionServiceStub.returnQbStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverQb).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverRb').and.callThrough();
      service.setLastSeasonRB();
      expect(statsFunctionServiceStub.returnRbStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverRb).toHaveBeenCalled();
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
      spyOn(statsFunctionServiceStub, 'returnTeStats').and.callThrough();
      spyOn(apiServiceStub, 'httpGet').and.callThrough();
      spyOn(filterServiceStub, 'filterArray').and.callThrough();
      spyOn(notifyServiceStub, 'emitWaiverWr').and.callThrough();
      service.setLastSeasonWR();
      expect(statsFunctionServiceStub.returnTeStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverWr).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverTe').and.callThrough();
      service.setLastSeasonTE();
      expect(statsFunctionServiceStub.returnTeStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverTe).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverDef').and.callThrough();
      service.setLastSeasonDEF();
      expect(statsFunctionServiceStub.returnDEFStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverDef).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverK').and.callThrough();
      service.setLastSeasonK();
      expect(statsFunctionServiceStub.returnKickerStats).toHaveBeenCalled();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverK).toHaveBeenCalled();
    });
  });
});
