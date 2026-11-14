import {add}  from "../src/sum";

describe("add", () => {
  test("should return the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});