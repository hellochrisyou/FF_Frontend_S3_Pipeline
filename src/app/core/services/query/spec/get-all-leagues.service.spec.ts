import { TestBed } from '@angular/core/testing';
import { GetAllLeaguesService } from '@core';
describe('GetAllLeaguesService', () => {
  let service: GetAllLeaguesService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [GetAllLeaguesService] });
    service = TestBed.get(GetAllLeaguesService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
