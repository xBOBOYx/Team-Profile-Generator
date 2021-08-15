const Manager = require("../lib/Manager.js");

test ("Manager office number input", () => {
    const officeNumber = "4815162342";
    const employee = new Manager("Hurly", 200, "hurly@thehatch.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test ('"Manager getRole() to return "Manager"', () => {
    const role = "Manager";
    const employee = new Manager("Hurly", 200, "hurly@thehatch.com");
    expect(employee.getRole()).toBe(role);
});