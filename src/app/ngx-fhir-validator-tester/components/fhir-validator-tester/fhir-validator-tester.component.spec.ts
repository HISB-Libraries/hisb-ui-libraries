import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhirValidatorTesterComponent } from './fhir-validator-tester.component';

describe('FhirValidatorTesterComponent', () => {
  let component: FhirValidatorTesterComponent;
  let fixture: ComponentFixture<FhirValidatorTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FhirValidatorTesterComponent]
    });
    fixture = TestBed.createComponent(FhirValidatorTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
