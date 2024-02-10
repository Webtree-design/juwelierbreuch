import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmiedComponent } from './schmied.component';

describe('SchmiedComponent', () => {
  let component: SchmiedComponent;
  let fixture: ComponentFixture<SchmiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchmiedComponent]
    });
    fixture = TestBed.createComponent(SchmiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
