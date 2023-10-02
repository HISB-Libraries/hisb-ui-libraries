import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidatorComponent } from './simple-validator.component';

describe('SimpleValidatorComponent', () => {
  let component: SimpleValidatorComponent;
  let fixture: ComponentFixture<SimpleValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleValidatorComponent]
    });
    fixture = TestBed.createComponent(SimpleValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
