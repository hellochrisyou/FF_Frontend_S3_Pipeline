import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '@core';
describe('ApiService', () => {
  let service: ApiService;
  beforeEach(() => {
    const httpErrorResponseStub = {
      error: { message: {} },
      status: {},
      message: {}
    };
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        { provide: HttpErrorResponse, useValue: httpErrorResponseStub }
      ]
    });
    service = TestBed.get(ApiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
