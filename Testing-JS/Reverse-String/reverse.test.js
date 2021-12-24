const reverseString = require("./reverse");

test("reverse a string", () => {
    expect(reverseString("see you")).toMatch("uoy ees");
});