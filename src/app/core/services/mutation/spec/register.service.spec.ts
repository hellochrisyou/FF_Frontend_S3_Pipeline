import { TestBed } from '@angular/core/testing';
import { RegisterService } from '../register.service';
describe('RegisterService', () => {
  let service: RegisterService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RegisterService] });
    service = TestBed.get(RegisterService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
