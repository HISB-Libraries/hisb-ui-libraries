import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTesterComponent } from './dialog-tester.component';

describe('DialogTesterComponent', () => {
  let component: DialogTesterComponent;
  let fixture: ComponentFixture<DialogTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogTesterComponent]
    });
    fixture = TestBed.createComponent(DialogTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
