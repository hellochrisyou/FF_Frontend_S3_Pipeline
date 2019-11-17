import { TestBed } from '@angular/core/testing';
import { StatsFunctionService } from './stats-function.service';
describe('StatsFunctionService', () => {
  let service: StatsFunctionService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StatsFunctionService] });
    service = TestBed.get(StatsFunctionService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('tmpQbArray defaults to: []', () => {
    expect(service.tmpQbArray).toEqual([]);
  });
  it('tmpRbArray defaults to: []', () => {
    expect(service.tmpRbArray).toEqual([]);
  });
  it('tmpWrArray defaults to: []', () => {
    expect(service.tmpWrArray).toEqual([]);
  });
  it('tmpTeArray defaults to: []', () => {
    expect(service.tmpTeArray).toEqual([]);
  });
  it('tmpDefArray defaults to: []', () => {
    expect(service.tmpDefArray).toEqual([]);
  });
  it('tmpKArray defaults to: []', () => {
    expect(service.tmpKArray).toEqual([]);
  });
});
