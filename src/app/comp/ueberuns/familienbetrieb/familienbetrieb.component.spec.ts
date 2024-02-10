import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilienbetriebComponent } from './familienbetrieb.component';

describe('FamilienbetriebComponent', () => {
  let component: FamilienbetriebComponent;
  let fixture: ComponentFixture<FamilienbetriebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilienbetriebComponent]
    });
    fixture = TestBed.createComponent(FamilienbetriebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
