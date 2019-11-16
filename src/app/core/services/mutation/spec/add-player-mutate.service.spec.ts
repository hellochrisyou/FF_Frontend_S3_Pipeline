import { TestBed } from '@angular/core/testing';
import { AddPlayerMutateService } from '@core';
describe('AddPlayerMutateService', () => {
  let service: AddPlayerMutateService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AddPlayerMutateService] });
    service = TestBed.get(AddPlayerMutateService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
