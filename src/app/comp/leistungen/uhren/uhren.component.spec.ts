import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhrenComponent } from './uhren.component';

describe('UhrenComponent', () => {
  let component: UhrenComponent;
  let fixture: ComponentFixture<UhrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UhrenComponent]
    });
    fixture = TestBed.createComponent(UhrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
