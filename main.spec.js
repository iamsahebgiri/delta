const solution = require("./main");
const {
  dates,
  oneMissingDate,
  twoMissingDates,
} = require("./__fixtures__/fixtures");

describe("test cases", () => {
  it("should test full set of days", () => {
    expect(solution(dates)).toEqual({
      Mon: -6,
      Tue: 2,
      Wed: 2,
      Thu: 4,
      Fri: 6,
      Sat: 8,
      Sun: 2,
    });
  });

  it("should test two missing days", () => {
    expect(solution(twoMissingDates)).toEqual({
      Mon: 2,
      Tue: 4,
      Wed: 6,
      Thu: 8,
      Fri: 10,
      Sat: 12,
      Sun: 14,
    });
  });

  it("should test a missing day", () => {
    expect(solution(oneMissingDate)).toEqual({
      Mon: 2,
      Tue: 4,
      Wed: 6,
      Thu: 7,
      Fri: 8,
      Sat: 12,
      Sun: 14,
    });
  });
});
