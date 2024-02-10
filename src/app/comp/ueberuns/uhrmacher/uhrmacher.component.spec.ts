import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhrmacherComponent } from './uhrmacher.component';

describe('UhrmacherComponent', () => {
  let component: UhrmacherComponent;
  let fixture: ComponentFixture<UhrmacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UhrmacherComponent]
    });
    fixture = TestBed.createComponent(UhrmacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
