class Car {
  start() {
    console.log("car Started");
    this.engine.start();
  }
}

describe("without mock", () => {
  test("without test car", () => {
    let started = false;
    class MockEngine extends Engine {
      start() {
        started = true;
        console.log("mocked engine started");
      }
    }
  });
});
