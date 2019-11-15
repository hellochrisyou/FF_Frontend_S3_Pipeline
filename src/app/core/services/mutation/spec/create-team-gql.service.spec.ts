import { TestBed } from '@angular/core/testing';

import { CreateTeamGQLService } from '../create-team-gql.service';

describe('CreateTeamGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTeamGQLService = TestBed.get(CreateTeamGQLService);
    expect(service).toBeTruthy();
  });
});
