import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '@shared/model/interface.model';
import { SubmitPopupDialog } from './submit-popup.dialog';
describe('SubmitPopupDialog', () => {
  let component: SubmitPopupDialog;
  let fixture: ComponentFixture<SubmitPopupDialog>;
  beforeEach(() => {
    const matDialogRefStub = {};
    const dialogDataStub = { title: {}, subTitle: {}, text: {} };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SubmitPopupDialog],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: DialogData, useValue: dialogDataStub }
      ]
    });
    fixture = TestBed.createComponent(SubmitPopupDialog);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
