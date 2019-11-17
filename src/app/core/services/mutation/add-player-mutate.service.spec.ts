import { TestBed } from '@angular/core/testing';
import { AddPlayerMutateService } from './add-player-mutate.service';
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
