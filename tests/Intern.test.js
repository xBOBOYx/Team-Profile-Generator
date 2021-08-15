const Intern = require("../lib/Intern.js");

test ("Intern School input", () => {
    const school = "Xavier Institute For Higher Learning";
    const employee = new Intern("Jubilee", 244, "jubilee@xihl.com", school);
    expect(employee.school).toBe(school);
});

test ('"Intern getRole() to return "Intern"', () => {
    const role = "Intern";
    const employee = new Intern("Jubilee", 244, "jubilee@xihl.com");
    expect(employee.getRole()).toBe(role);
});