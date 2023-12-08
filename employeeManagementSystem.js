/*
  Title: Advanced Employee Management System

  Description: This code demonstrates an advanced employee management system that allows users to add, edit, delete, and retrieve employee information. It includes features like searching for employees by name or ID, sorting employees by various criteria, and calculating statistics like average salary and employee count.

  Filename: employeeManagementSystem.js
*/

// Employee class definition
class Employee {
  constructor(id, name, age, position, salary) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
}

// Employee Management System class definition
class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
  }

  // Add new employee
  addEmployee(newEmployee) {
    this.employees.push(newEmployee);
  }

  // Edit existing employee
  editEmployee(id, updatedEmployee) {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
      console.log("Employee updated successfully.");
    } else {
      console.log("Employee not found.");
    }
  }

  // Delete an employee
  deleteEmployee(id) {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log("Employee deleted successfully.");
    } else {
      console.log("Employee not found.");
    }
  }

  // Retrieve employee by ID
  getEmployeeById(id) {
    const index = this.findIndexById(id);
    if (index !== -1) {
      return this.employees[index];
    } else {
      return null;
    }
  }

  // Retrieve employees by name
  getEmployeesByName(name) {
    return this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Search employee by ID or name
  searchEmployee(keyword) {
    return this.employees.filter(
      (employee) =>
        employee.id === keyword || employee.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // Find index of an employee by ID
  findIndexById(id) {
    return this.employees.findIndex((employee) => employee.id === id);
  }

  // Sort employees by name
  sortEmployeesByName() {
    this.employees.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Sort employees by age
  sortEmployeesByAge() {
    this.employees.sort((a, b) => a.age - b.age);
  }

  // Sort employees by salary
  sortEmployeesBySalary() {
    this.employees.sort((a, b) => a.salary - b.salary);
  }

  // Calculate average salary of all employees
  calculateAverageSalary() {
    const totalSalary = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / this.employees.length;
  }

  // Get total count of employees
  getEmployeeCount() {
    return this.employees.length;
  }
}

// Usage example

const empSystem = new EmployeeManagementSystem();

empSystem.addEmployee(new Employee(1, "John Smith", 30, "Manager", 5000));
empSystem.addEmployee(new Employee(2, "Emily Johnson", 25, "Engineer", 4000));
empSystem.addEmployee(new Employee(3, "Robert Davis", 35, "Accountant", 4500));
empSystem.addEmployee(new Employee(4, "Jessica Brown", 28, "Designer", 3500));

console.log(empSystem.getEmployeeCount()); // Output: 4

const employeeToEdit = empSystem.getEmployeeById(2);
employeeToEdit.age = 26;
employeeToEdit.position = "Senior Engineer";
empSystem.editEmployee(2, employeeToEdit); // Output: Employee updated successfully.

empSystem.deleteEmployee(1); // Output: Employee deleted successfully.

console.log(empSystem.calculateAverageSalary()); // Output: 4000

const employeesWithName = empSystem.getEmployeesByName("John");
console.log(employeesWithName); // Output: [ Employee { id: 1, name: 'John Smith', age: 30, ... } ]

const sortedEmployees = empSystem.searchEmployee("E");
console.log(sortedEmployees); // Output: [ Employee { id: 2, name: 'Emily Johnson', age: 25, ...}, Employee { id: 4, name: 'Jessica Brown', age: 28, ... } ]

empSystem.sortEmployeesByName();
console.log(empSystem.employees); // Output: Sorted employees array by name

empSystem.sortEmployeesBySalary();
console.log(empSystem.employees); // Output: Sorted employees array by salary