/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

class Employee {
  static companyName: string;

  constructor(
    public name: string,
    public age: number,
    private _salary: number = 0,
    protected id: number,
  ) {}

  set salary(salary: number) {
    if (salary > 0) {
      this._salary = salary;
    } else {
      throw new Error("Salary must be positive");
    }
  }

  get salary() {
    return this._salary;
  }

  static getCompanyName() {
    return Employee.companyName;
  }

  getDetails(): string {
    return `Company: ${this.name}, salary: ${this.salary}, age: ${this.age}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string,
  ) {
    super(name, age, salary, id);
  }

  getDetails(): string {
    return `${super.getDetails()}, department: ${this.department}`;
  }
}

const employee: Employee = new Employee("eName", 19, 1200, 1);
employee.salary = 1556;

console.log(employee.getDetails());

const manager: Manager = new Manager("MName", 35, 1000, 2, "IT");
manager.salary = 1234;
console.log(manager.getDetails());
