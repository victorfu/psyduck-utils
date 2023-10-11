import {
  formatDate,
  getCurrentYearMonth,
  getRandomTime,
  isNumberParseable,
} from "./";

describe("unit | isNumberParseable", () => {
  it("returns `true` for values parseable number", () => {
    expect(isNumberParseable("-7.5")).toBe(true);
    expect(isNumberParseable(false)).toBe(true);
    expect(isNumberParseable(1892)).toBe(true);
  });

  it("returns `false` for values non parseable to number", () => {
    expect(isNumberParseable("A8sa")).toBe(false);
    expect(isNumberParseable({})).toBe(false);
    expect(isNumberParseable(NaN)).toBe(false);
    expect(isNumberParseable("18L")).toBe(false);
  });
});

describe("unit | formatDate", () => {
  it("returns a string in the format 'yyyy-MM-dd'", () => {
    const date = new Date("2022-01-01T12:34:56.789Z");
    const result = formatDate(date);
    expect(result).toBe("2022-01-01");
  });

  it("pads single-digit months and days with a leading zero", () => {
    const date = new Date("2022-02-03T01:02:03.456Z");
    const result = formatDate(date);
    expect(result).toBe("2022-02-03");
  });
});

describe("unit | getCurrentYearMonth", () => {
  it("returns an object with current year and month", () => {
    const result = getCurrentYearMonth();
    const currentDate = new Date();
    const expectedYear = currentDate.getFullYear().toString();
    const expectedMonth = (currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    expect(result).toEqual({
      currentYear: expectedYear,
      currentMonth: expectedMonth,
    });
  });
});

describe("unit | getRandomTime", () => {
  // const date = new Date("2022-01-01T00:00:00.000Z");

  it("returns a Date object", () => {
    const date = new Date();
    const result = getRandomTime(date, "08:50", "18:20");
    expect(result instanceof Date).toBe(true);
  });

  it("returns a random time between start and end times", () => {
    const date = new Date();
    const result = getRandomTime(date, "08:50", "18:20");
    const start = new Date(date);
    start.setHours(8, 50, 0, 0);
    const end = new Date(date);
    end.setHours(18, 20, 0, 0);
    expect(result.getTime()).toBeGreaterThanOrEqual(start.getTime());
    expect(result.getTime()).toBeLessThanOrEqual(end.getTime());
  });
});
