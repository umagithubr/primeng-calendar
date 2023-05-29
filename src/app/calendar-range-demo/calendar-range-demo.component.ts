import { DatePipe } from '@angular/common';
import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-calendar-range-demo',
  templateUrl: './calendar-range-demo.component.html',
  styleUrls: ['./calendar-range-demo.component.css']
})
export class CalendarRangeDemoComponent {
  fromDate: Date|any;
  toDate: Date|any;
  dateRange: Date[]|any;
  invalidDates: Date[]|any;
  showCalendarControl: boolean = false;
  pipe = new DatePipe('en-US');
  
constructor(){}

  showCalendar() {
      this.showCalendarControl = true;      
  }

  hideCalendar() {
    this.showCalendarControl = false;  
  }

  updateRange() {
    
    if (this.fromDate && this.toDate) {
      
      this.dateRange = [this.fromDate, this.toDate];
      this.showCalendarControl = false;  
    } else {
      this.dateRange = null;
    }
  }

  onDateRangeChange(event: any) {    
    if (event && event.length > 0) {
      this.fromDate = this.pipe.transform(event[0],  'MM/dd/yyyy');
      this.toDate = this.pipe.transform(event[event.length - 1],  'MM/dd/yyyy');;
      if(event[0] !== null && event[1] !== null)
      this.showCalendarControl = false; 
    } else {
      this.fromDate = null;
      this.toDate = null;
    }
  }
}
