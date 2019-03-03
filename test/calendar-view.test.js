const { JSDOM } = require("jsdom");
const expect = require("chai").expect;
const CalendarView = require("../src/js/calendar-view").CalendarView;

describe("Calendar View Tests", () => {
  let calendarView;
  let dom;

  beforeEach(() => {
    dom = new JSDOM('<html><body><div id="month-year"></div><div id="cal-body"></div></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
    global.DocumentFragment = dom.window.document.DocumentFragment;
    calendarView = new CalendarView();
  });

  describe("Init", () => {
    let children;
    beforeEach(() => {
      const calBody = document.querySelector("#cal-body");
      children = calBody.querySelectorAll("span");
    });
    it("initializes the calendar body", () => {
      expect(children.length).to.equal(31);
    });
  
    it("sets text for the children", () => {
      children.forEach((child, index) => {
        expect(child.textContent).to.equal(`${index + 1}`);
      })
    });

    it("sets classnames for the children", () => {
      children.forEach((child) => {
        expect(child.classList.contains("column")).to.equal(true);
        expect(child.classList.contains("is-one-fifth")).to.equal(true);
        expect(child.classList.contains("is-size-4")).to.equal(true);
        expect(child.classList.contains("has-text-centered")).to.equal(true);
        expect(child.classList.contains("has-font-weight-semibold")).to.equal(true);
      })
    });

    it("sets ids for the children", () => {
      children.forEach((child, index) => {
        expect(child.id).to.equal(`day-${index + 1}`)
      })
    });
  });

  describe("setMonthYearText", () => {
    beforeEach(() => {
      calendarView.setMonthYearText("July, 1999");
    });

    it("sets month year text", () => {
      const text = document.querySelector("#month-year").textContent;
      expect(text).to.equal("July, 1999");
    });
  });

  describe("setDays", () => {
    let children;
    beforeEach(() => {
      calendarView.setDays(28);
      const calBody = document.querySelector("#cal-body");
      children = calBody.querySelectorAll("span");
    });

    it("sets display block on children from 1st day to specified day", () => {
      for(let i = 1; i <= 28; ++i) {
        expect(children[i - 1].style.display).to.equal("block");
      }
    });

    it('sets display none on children from specified day + 1 to 31st day', () => {
      for(let i = 29; i <= 31; ++i) {
        expect(children[i - 1].style.display).to.equal("none");
      }
    });
  });

});