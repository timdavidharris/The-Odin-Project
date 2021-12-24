const cap = require("./cap");

test("Check for capitalization", () => {
    expect(cap("a simple test")).toMatch("A");
});