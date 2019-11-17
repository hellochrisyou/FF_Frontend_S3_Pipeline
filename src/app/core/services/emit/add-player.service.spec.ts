import { TestBed } from '@angular/core/testing';
import { Dto } from '@shared/model/interface.model';
import { AddPlayerService } from './add-player.service';
describe('AddPlayerService', () => {
  let service: AddPlayerService;
  beforeEach(() => {
    const dtoStub = {};
    TestBed.configureTestingModule({
      providers: [AddPlayerService, { provide: Dto, useValue: dtoStub }]
    });
    service = TestBed.get(AddPlayerService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('isWaiver defaults to: true', () => {
    expect(service.isWaiver).toEqual(true);
  });
});
