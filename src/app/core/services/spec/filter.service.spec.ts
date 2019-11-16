import { TestBed } from '@angular/core/testing';
import { FilterService } from '@core';
describe('FilterService', () => {
  let service: FilterService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FilterService] });
    service = TestBed.get(FilterService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('resultArray defaults to: []', () => {
    expect(service.resultArray).toEqual([]);
  });
  it('otherMatch defaults to: false', () => {
    expect(service.otherMatch).toEqual(false);
  });
  it('myPlayers defaults to: []', () => {
    expect(service.myPlayers).toEqual([]);
  });
  it('otherPlayers defaults to: []', () => {
    expect(service.otherPlayers).toEqual([]);
  });
});
