const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
export class Calendar {
  constructor() {
    this._date = new Date();
    this.addMonth = this.addMonth.bind(this);
    this.subtractMonth = this.subtractMonth.bind(this);
    this.daysOfMonth = this.daysOfMonth.bind(this)
    this.isToday = this.isToday.bind(this);
  }

  getMonthYearText() {
    const month = this._date.getMonth();
    const year = this._date.getFullYear();
    return `${MONTHS[month]}, ${year}`
  }

  addMonth() {
    this._date.setMonth(this._date.getMonth() + 1);
  }

  subtractMonth() {
    this._date.setMonth(this._date.getMonth() - 1);
  }

  daysOfMonth() {
    return new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0).getDate();
  }

  today() {
    return this._date.getDate();
  }

  isToday() {
    const today = new Date()
   return this._date.getDate() == today.getDate() &&
   this._date.getMonth() == today.getMonth() &&
   this._date.getFullYear() == today.getFullYear()
  }
}
