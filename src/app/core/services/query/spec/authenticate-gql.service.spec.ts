import { TestBed } from '@angular/core/testing';

import { AuthenticateGQLService } from '../authenticate-gql.service';

describe('AuthenticateGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateGQLService = TestBed.get(AuthenticateGQLService);
    expect(service).toBeTruthy();
  });
});
