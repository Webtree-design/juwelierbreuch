import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2Component } from './s2.component';

describe('S2Component', () => {
  let component: S2Component;
  let fixture: ComponentFixture<S2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [S2Component]
    });
    fixture = TestBed.createComponent(S2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
