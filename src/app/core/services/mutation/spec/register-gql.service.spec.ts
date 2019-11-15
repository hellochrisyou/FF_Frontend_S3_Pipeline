import { TestBed } from '@angular/core/testing';

import { RegisterGQLService } from '../register-gql.service';

describe('RegisterGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterGQLService = TestBed.get(RegisterGQLService);
    expect(service).toBeTruthy();
  });
});
