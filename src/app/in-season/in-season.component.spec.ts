import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { InSeasonComponent } from './in-season.component';
describe('InSeasonComponent', () => {
  let component: InSeasonComponent;
  let fixture: ComponentFixture<InSeasonComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [InSeasonComponent]
    });
    fixture = TestBed.createComponent(InSeasonComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
