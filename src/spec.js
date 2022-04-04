const Run = require("./index");

describe("adds an item to the dictionary", () => {
  let index = new Run();
  it("should do this", () => {
    index.run();
    expect(index).toMatch(
      /console.log("Please enter a command. Enter HELP for a list of the commands.")/gm
    );
  });
});

describe("EXIT Test Suite", () => {
  it("EXIT Case", () => {
    expect("EXIT").toBeTruthy();
  });
});

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});
