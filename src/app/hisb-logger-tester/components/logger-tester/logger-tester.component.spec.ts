import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerTesterComponent } from './logger-tester.component';

describe('LoggerTesterComponent', () => {
  let component: LoggerTesterComponent;
  let fixture: ComponentFixture<LoggerTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerTesterComponent]
    });
    fixture = TestBed.createComponent(LoggerTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
