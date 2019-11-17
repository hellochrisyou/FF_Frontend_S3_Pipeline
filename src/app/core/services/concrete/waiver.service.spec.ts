import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiService } from '../api/api.service';
import { FilterService } from '../logic/filter.service';
import { NotifyService } from '../emit/notify.service';
import { StatsFunctionService } from '../logic/stats-function.service';
import { WaiverService } from './waiver.service';
describe('WaiverService', () => {
  let service: WaiverService;
  beforeEach(() => {
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
    const statsFunctionServiceStub = {
      returnQbStats: players => ({}),
      returnRbStats: players => ({}),
      returnTeStats: players => ({}),
      returnDEFStats: players => ({}),
      returnKickerStats: players => ({})
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WaiverService,
        { provide: ApiService, useValue: apiServiceStub },
        { provide: FilterService, useValue: filterServiceStub },
        { provide: NotifyService, useValue: notifyServiceStub },
        { provide: StatsFunctionService, useValue: statsFunctionServiceStub }
      ]
    });
    service = TestBed.get(WaiverService);
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
      spyOn(notifyServiceStub, 'emitWaiverQb').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnQbStats').and.callThrough();
      service.setLastSeasonQB();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverQb).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverRb').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnRbStats').and.callThrough();
      service.setLastSeasonRB();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverRb).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverWr').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnTeStats').and.callThrough();
      service.setLastSeasonWR();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverWr).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnTeStats).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverTe').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnTeStats').and.callThrough();
      service.setLastSeasonTE();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverTe).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverDef').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnDEFStats').and.callThrough();
      service.setLastSeasonDEF();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverDef).toHaveBeenCalled();
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
      spyOn(notifyServiceStub, 'emitWaiverK').and.callThrough();
      spyOn(statsFunctionServiceStub, 'returnKickerStats').and.callThrough();
      service.setLastSeasonK();
      expect(apiServiceStub.httpGet).toHaveBeenCalled();
      expect(filterServiceStub.filterArray).toHaveBeenCalled();
      expect(notifyServiceStub.emitWaiverK).toHaveBeenCalled();
      expect(statsFunctionServiceStub.returnKickerStats).toHaveBeenCalled();
    });
  });
});
