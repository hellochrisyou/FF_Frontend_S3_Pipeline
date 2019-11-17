import { TestBed } from '@angular/core/testing';
import { NotifyService } from './notify.service';
describe('NotifyService', () => {
  let service: NotifyService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NotifyService] });
    service = TestBed.get(NotifyService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
