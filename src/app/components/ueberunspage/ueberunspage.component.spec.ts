import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberunspageComponent } from './ueberunspage.component';

describe('UeberunspageComponent', () => {
  let component: UeberunspageComponent;
  let fixture: ComponentFixture<UeberunspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UeberunspageComponent]
    });
    fixture = TestBed.createComponent(UeberunspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
