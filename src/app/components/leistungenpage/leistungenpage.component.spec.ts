import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungenpageComponent } from './leistungenpage.component';

describe('LeistungenpageComponent', () => {
  let component: LeistungenpageComponent;
  let fixture: ComponentFixture<LeistungenpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungenpageComponent]
    });
    fixture = TestBed.createComponent(LeistungenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
