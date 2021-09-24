class Department {
  name: string; // class field
  protected employees: string[] = [];

  constructor(id: string, name: string) {
    this.name = name;

    this.describe = this.describe.bind(this);
  }

  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.name + " Employees");
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let dept1 = new Department("1", "Accounting");

dept1.describe();

dept1.addEmployee("Joe");
dept1.addEmployee("Chris");
dept1.addEmployee("Hannah");

// dept1.employees[3] = "Martin";
dept1.printEmployees();

// Unique to typescript: shortcut to create class fields

class Department2 {
  // TS will automatically compile this into a normal constructor
  constructor(public readonly id, private name: string, private employees: string[]) {}
}

// private, public, readonly are unique to TS

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // this calls the base class (Department) constructor
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error();
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

abstract class Abstract {
  abstract printValue(value: string): void;
}

class Real extends Abstract {
  printValue(value: string) {
    console.log(value);
  }
}

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
  dob: "1-151-1990",
};
