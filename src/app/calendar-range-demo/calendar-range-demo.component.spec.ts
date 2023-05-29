import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRangeDemoComponent } from './calendar-range-demo.component';

describe('CalendarRangeDemoComponent', () => {
  let component: CalendarRangeDemoComponent;
  let fixture: ComponentFixture<CalendarRangeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarRangeDemoComponent]
    });
    fixture = TestBed.createComponent(CalendarRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
