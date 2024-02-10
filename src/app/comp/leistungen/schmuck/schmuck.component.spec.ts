import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchmuckComponent } from './schmuck.component';

describe('SchmuckComponent', () => {
  let component: SchmuckComponent;
  let fixture: ComponentFixture<SchmuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchmuckComponent]
    });
    fixture = TestBed.createComponent(SchmuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
