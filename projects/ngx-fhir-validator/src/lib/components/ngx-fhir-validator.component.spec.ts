import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFhirValidatorComponent } from './ngx-fhir-validator.component';

describe('NgxFhirValidatorComponent', () => {
  let component: NgxFhirValidatorComponent;
  let fixture: ComponentFixture<NgxFhirValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFhirValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFhirValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
