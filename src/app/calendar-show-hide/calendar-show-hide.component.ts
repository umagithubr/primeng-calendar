import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-show-hide',
  templateUrl: './calendar-show-hide.component.html',
  styleUrls: ['./calendar-show-hide.component.css']
})
export class CalendarShowHideComponent {
  fromDate: Date|any;
  toDate: Date|any;
  showFromCalendar: boolean = false;
  showToCalendar: boolean = false;
  selectedDates: Date[]|any;

  showCalendar(field: string) {
    if (field === 'from') {
      this.showFromCalendar = true;
      this.showToCalendar = false;
    } else if (field === 'to') {
      this.showToCalendar = true;
      this.showFromCalendar = false;
    }
  }

  hideCalendar(field: string) {
    if (field === 'from') {
      this.showFromCalendar = false;
    } else if (field === 'to') {
      this.showToCalendar = false;
    }
  }
  
}
