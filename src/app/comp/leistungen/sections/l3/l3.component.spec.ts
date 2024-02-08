import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L3Component } from './l3.component';

describe('L3Component', () => {
  let component: L3Component;
  let fixture: ComponentFixture<L3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [L3Component]
    });
    fixture = TestBed.createComponent(L3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
