import { TestBed } from '@angular/core/testing';

import { NgxFhirValidatorService } from './ngx-fhir-validator.service';

describe('NgxFhirValidatorService', () => {
  let service: NgxFhirValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFhirValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
