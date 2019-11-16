import { TestBed } from '@angular/core/testing';

import { TogglePlayerService } from '../toggle-player.service';

describe('TogglePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TogglePlayerService = TestBed.get(TogglePlayerService);
    expect(service).toBeTruthy();
  });
});
