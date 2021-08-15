const Manager = require("../lib/Manager.js");

test ("Manager office number input", () => {
    const officeNumber = "4815162342";
    const employee = new Manager("Professor X", 1, "xavier@xihl.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test ('"Manager getRole() to return "Manager"', () => {
    const role = "Manager";
    const employee = new Manager("Professor X", 1, "xavier@xihl.com");
    expect(employee.getRole()).toBe(role);
});