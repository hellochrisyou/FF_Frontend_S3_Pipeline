import { TestBed } from '@angular/core/testing';
import { ThirdPartyService } from './third-party.service';
describe('ThirdPartyService', () => {
  let service: ThirdPartyService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ThirdPartyService] });
    service = TestBed.get(ThirdPartyService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('qbArray defaults to: []', () => {
    expect(service.qbArray).toEqual([]);
  });
  it('rbArray defaults to: []', () => {
    expect(service.rbArray).toEqual([]);
  });
  it('wrArray defaults to: []', () => {
    expect(service.wrArray).toEqual([]);
  });
  it('teArray defaults to: []', () => {
    expect(service.teArray).toEqual([]);
  });
  it('defArray defaults to: []', () => {
    expect(service.defArray).toEqual([]);
  });
  it('kArray defaults to: []', () => {
    expect(service.kArray).toEqual([]);
  });
  describe('CallNflApi', () => {
    it('makes expected calls', () => {
      spyOn(component, 'setLastSeasonQB').and.callThrough();
      spyOn(component, 'setLastSeasonRB').and.callThrough();
      spyOn(component, 'setLastSeasonWR').and.callThrough();
      spyOn(component, 'setLastSeasonTE').and.callThrough();
      spyOn(component, 'setLastSeasonDEF').and.callThrough();
      spyOn(component, 'setLastSeasonK').and.callThrough();
      service.CallNflApi();
      expect(service.setLastSeasonQB).toHaveBeenCalled();
      expect(service.setLastSeasonRB).toHaveBeenCalled();
      expect(service.setLastSeasonWR).toHaveBeenCalled();
      expect(service.setLastSeasonTE).toHaveBeenCalled();
      expect(service.setLastSeasonDEF).toHaveBeenCalled();
      expect(service.setLastSeasonK).toHaveBeenCalled();
    });
  });
});
