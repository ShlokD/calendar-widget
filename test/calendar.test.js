const expect = require("chai").expect;
const Calendar = require("../src/js/calendar").Calendar;

describe("Calendar Tests", () => {
  let mockDate;
  let calendar;

  beforeEach(() => {
    mockDate = new Date("February 29, 2000");
    global.Date = () => mockDate;
    calendar = new Calendar();
  });

  it("returns month year text", () => {
    expect(calendar.getMonthYearText()).to.equal("Feb, 2000");
  })

  it("returns days of the month", () => {
    expect(calendar.daysOfMonth()).to.equal(29);
  });

  describe("addMonth", () => {
    before(() => {
      calendar.addMonth();
    });

    it("returns month year text", () => {
      expect(calendar.getMonthYearText()).to.equal("Mar, 2000");
    })

    after(() => {
      calendar.subtractMonth();
    })
  });

  describe("subtractMonth", () => {
    before(() => {
      calendar.subtractMonth();
    });

    it("returns month year text", () => {
      expect(calendar.getMonthYearText()).to.equal("Jan, 2000");
    })

    after(() => {
      calendar.addMonth();
    })
  });
})