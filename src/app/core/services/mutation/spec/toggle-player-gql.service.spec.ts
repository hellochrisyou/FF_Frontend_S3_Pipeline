import { TestBed } from '@angular/core/testing';

import { TogglePlayerGQLService } from '../toggle-player-gql.service';

describe('TogglePlayerGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TogglePlayerGQLService = TestBed.get(TogglePlayerGQLService);
    expect(service).toBeTruthy();
  });
});
