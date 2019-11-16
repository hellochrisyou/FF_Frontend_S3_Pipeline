import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DraftService, LeagueService } from '@core';
import { DraftComponent } from '@draft';
describe('DraftComponent', () => {
  let component: DraftComponent;
  let fixture: ComponentFixture<DraftComponent>;
  beforeEach(() => {
    const draftServiceStub = { CallNflApi: () => ({}) };
    const leagueServiceStub = { getMyLeague: () => ({ leagueName: {} }) };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DraftComponent],
      providers: [
        { provide: DraftService, useValue: draftServiceStub },
        { provide: LeagueService, useValue: leagueServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DraftComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const draftServiceStub: DraftService = fixture.debugElement.injector.get(
        DraftService
      );
      const leagueServiceStub: LeagueService = fixture.debugElement.injector.get(
        LeagueService
      );
      spyOn(draftServiceStub, 'CallNflApi').and.callThrough();
      spyOn(leagueServiceStub, 'getMyLeague').and.callThrough();
      component.ngOnInit();
      expect(draftServiceStub.CallNflApi).toHaveBeenCalled();
      expect(leagueServiceStub.getMyLeague).toHaveBeenCalled();
    });
  });
});
