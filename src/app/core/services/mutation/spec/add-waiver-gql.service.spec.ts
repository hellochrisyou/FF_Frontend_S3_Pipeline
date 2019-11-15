import { TestBed } from '@angular/core/testing';

import { AddWaiverGQLService } from '../add-waiver-gql.service';

describe('AddWaiverGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddWaiverGQLService = TestBed.get(AddWaiverGQLService);
    expect(service).toBeTruthy();
  });
});
