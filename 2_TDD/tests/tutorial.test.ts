describe("Falsy values check", () => {
  test("Test falsy", (): void => {
    expect(NaN).toBeFalsy();
    expect(null).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(false).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});
