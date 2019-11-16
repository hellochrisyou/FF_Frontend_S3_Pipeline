import { TestBed } from '@angular/core/testing';
import { CloseDialogService } from '../emit/close-dialog.service';
describe('CloseDialogService', () => {
  let service: CloseDialogService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CloseDialogService] });
    service = TestBed.get(CloseDialogService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
