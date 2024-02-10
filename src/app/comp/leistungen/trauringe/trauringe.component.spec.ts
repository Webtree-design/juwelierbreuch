import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrauringeComponent } from './trauringe.component';

describe('TrauringeComponent', () => {
  let component: TrauringeComponent;
  let fixture: ComponentFixture<TrauringeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrauringeComponent]
    });
    fixture = TestBed.createComponent(TrauringeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
