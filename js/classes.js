class Department {
    constructor(id, name) {
        this.employees = [];
        this.name = name;
        this.describe = this.describe.bind(this);
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
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
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
}
// private, public, readonly are unique to TS
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); // this calls the base class (Department) constructor
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error();
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
class Abstract {
}
class Real extends Abstract {
    printValue(value) {
        console.log(value);
    }
}
let user1;
user1 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
    dob: "1-151-1990",
};
