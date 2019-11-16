import { TestBed } from '@angular/core/testing';

import { AddWaiverService } from '../add-waiver.service';

describe('AddWaiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddWaiverService = TestBed.get(AddWaiverService);
    expect(service).toBeTruthy();
  });
});
