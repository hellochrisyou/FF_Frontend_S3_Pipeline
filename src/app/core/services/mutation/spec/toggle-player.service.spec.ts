import { TestBed } from '@angular/core/testing';
import { TogglePlayerService } from '@core';
describe('TogglePlayerService', () => {
  let service: TogglePlayerService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TogglePlayerService] });
    service = TestBed.get(TogglePlayerService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
