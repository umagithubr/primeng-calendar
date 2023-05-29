import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarShowHideComponent } from './calendar-show-hide.component';

describe('CalendarShowHideComponent', () => {
  let component: CalendarShowHideComponent;
  let fixture: ComponentFixture<CalendarShowHideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarShowHideComponent]
    });
    fixture = TestBed.createComponent(CalendarShowHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
