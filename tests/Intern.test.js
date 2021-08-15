const Intern = require("../lib/Intern.js");

test ("Engineer Github input", () => {
    const school = "Xavier Institute For Higher Learning";
    const employee = new Intern("Beast", 63, "beast@xihl.com", school);
    expect(employee.school).toBe(school);
});

test ('"Intern getRole() to return "Intern"', () => {
    const role = "Intern";
    const employee = new Intern("Beast", 63, "beast@xihl.com");
    expect(employee.getRole()).toBe(role);
});