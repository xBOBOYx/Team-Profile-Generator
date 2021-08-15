const Engineer = require("../lib/Engineer.js");

test ("Engineer Github input", () => {
    const github = "xBOBOYx";
    const employee = new Engineer("Boboy", 123, "boboy@boboy.com", github);
    expect(employee.github).toBe(github);
});

test ('"Engineer getRole() to return "Engineer"', () => {
    const role = "Engineer";
    const employee = new Engineer("Boboy", 123, "boboy@boboy.com");
    expect(employee.getRole()).toBe(role);
});
