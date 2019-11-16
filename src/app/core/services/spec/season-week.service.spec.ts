import { TestBed } from '@angular/core/testing';
import { SeasonWeekService } from '@core';
describe('SeasonWeekService', () => {
  let service: SeasonWeekService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SeasonWeekService] });
    service = TestBed.get(SeasonWeekService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
