import { Calendar } from "./calendar";
import { CalendarView } from "./calendar-view";

export class Controls {
  constructor() {
    this.nextMonth = document.querySelector("#next-month-btn");
    this.prevMonth = document.querySelector("#prev-month-btn");
    this.calendar = new Calendar();
    this.calendarView = new CalendarView();

    this.setNextMonth = this.setNextMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.setView = this.setView.bind(this);

    this.setToday();
  }
  
  setNextMonth() {
    this.calendar.addMonth();
    this.setView();
  }

  setPrevMonth() {
    this.calendar.subtractMonth();
    this.setView();
  }

  setView() {
    this.calendarView.setMonthYearText(this.calendar.getMonthYearText())
    this.calendarView.setDays(this.calendar.daysOfMonth());
    this.setToday();
  }

  setToday() {
    if(this.calendar.isToday()) {
      this.calendarView.setToday(this.calendar.today());
    } else {
      this.calendarView.resetToday();
    }
  }

  init() {
    this.setView();

    this.nextMonth.addEventListener("click", this.setNextMonth)
    this.prevMonth.addEventListener("click", this.setPrevMonth);
  }
}