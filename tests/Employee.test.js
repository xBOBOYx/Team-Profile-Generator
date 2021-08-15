const Employee = require('../lib/Employee.js');

test ('Employee name input', () => {
    const name = 'Scott Summers';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ('Employee Id input', () => {
    const id = '404';
    const employee = new Employee("Scott Summers", id,);
    expect(employee.id).toBe(id);
});

test ('Employee getEmail() to return email input', () => {
    const email = 'scott.summers@xihl.com';
    const employee = new Employee("Scott Summers", 404, email);
    expect(employee.getEmail()).toBe(email);
});

test ('Employee getRole() to return "Employee"', () => {
    const role = "Employee";
    const employee = new Employee("Scott Summers", 404, "scott.summers@xihl.com");
    expect(employee.getRole()).toBe(role);
});

