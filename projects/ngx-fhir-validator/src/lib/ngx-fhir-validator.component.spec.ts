import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFhirValidatorComponent } from './ngx-fhir-validator.component';

describe('NgxFhirValidatorComponent', () => {
  let component: NgxFhirValidatorComponent;
  let fixture: ComponentFixture<NgxFhirValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxFhirValidatorComponent]
    });
    fixture = TestBed.createComponent(NgxFhirValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
