import { TestBed } from '@angular/core/testing';
import { AddWaiverService } from '../add-waiver.service';
describe('AddWaiverService', () => {
  let service: AddWaiverService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AddWaiverService] });
    service = TestBed.get(AddWaiverService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
