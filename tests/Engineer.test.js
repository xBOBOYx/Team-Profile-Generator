const Engineer = require("../lib/Engineer.js");

test ("Engineer Github input", () => {
    const github = "xBEASTx";
    const employee = new Engineer("Beast", 123, "beast@xihl.com", github);
    expect(employee.github).toBe(github);
});

test ('"Engineer getRole() to return "Engineer"', () => {
    const role = "Engineer";
    const employee = new Engineer("Beast", 123, "beast@xihl.com");
    expect(employee.getRole()).toBe(role);
});
