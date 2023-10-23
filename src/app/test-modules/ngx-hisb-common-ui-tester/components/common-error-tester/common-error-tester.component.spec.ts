import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorTesterComponent } from './common-error-tester.component';

describe('CommonErrorTesterComponent', () => {
  let component: CommonErrorTesterComponent;
  let fixture: ComponentFixture<CommonErrorTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonErrorTesterComponent]
    });
    fixture = TestBed.createComponent(CommonErrorTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
