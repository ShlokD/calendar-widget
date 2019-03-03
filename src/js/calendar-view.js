export class CalendarView {
  constructor() {
    this.selectedMonthYearText = document.querySelector("#month-year");
    this.calendarBody = document.querySelector("#cal-body");
    this.init();
  }

  init() {
    const fragment = document.createDocumentFragment();

    for(let i = 1; i <=31; ++i) {
      const el = document.createElement('span');
      el.textContent = i;
      el.classList.add("column", "is-one-fifth", "is-size-4", "has-text-centered", "has-font-weight-semibold");
      el.setAttribute("id", `day-${i}`)
      fragment.appendChild(el);
    }
    this.calendarBody.appendChild(fragment);
  }

  setMonthYearText(text) {
    this.selectedMonthYearText.textContent = text;
  }

  setDays(days) {
    for(let i = 1; i <= days; ++i) {
      const el = this.calendarBody.querySelector(`#day-${i}`)
      el.style.display = "block";
    }

    for(let i = days + 1; i <= 31; ++i) {
      const el = this.calendarBody.querySelector(`#day-${i}`)
      el.style.display = "none";
    }
  }

  setToday(day) {
   this.today = this.calendarBody.querySelector(`#day-${day}`);
   this.today.classList.add('today');
  }

  resetToday(day) {
    this.today.classList.remove('today');
  }
}