const Employee = require('../lib/Employee.js');

test ('Employee name input', () => {
    const name = 'John Doe';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ('Employee Id input', () => {
    const id = '404';
    const employee = new Employee("John Doe", id,);
    expect(employee.id).toBe(id);
});

test ('Employee getEmail() to return email input', () => {
    const email = 'john.doe@lost.com';
    const employee = new Employee("John Doe", 404, email);
    expect(employee.getEmail()).toBe(email);
});

test ('Employee getRole() to return "Employee"', () => {
    const role = "Employee";
    const employee = new Employee("John Doe", 404, "john.doe@lost.com");
    expect(employee.getRole()).toBe(role);
});

