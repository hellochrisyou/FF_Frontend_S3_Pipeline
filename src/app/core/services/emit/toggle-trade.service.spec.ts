import { TestBed } from '@angular/core/testing';
import { Dto } from '@shared/model/interface.model';
import { ToggleTradeService } from './toggle-trade.service';
describe('ToggleTradeService', () => {
  let service: ToggleTradeService;
  beforeEach(() => {
    const dtoStub = {};
    TestBed.configureTestingModule({
      providers: [ToggleTradeService, { provide: Dto, useValue: dtoStub }]
    });
    service = TestBed.get(ToggleTradeService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('isTrade defaults to: true', () => {
    expect(service.isTrade).toEqual(true);
  });
  it('isActive defaults to: false', () => {
    expect(service.isActive).toEqual(false);
  });
});
