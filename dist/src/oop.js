"use strict";
console.log("working eith class and oop");
class Department {
    constructor(name) {
        this.name = name;
        this.employee = [];
        this.name = name;
    }
    describe() {
        console.log(`Depaertment is ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
accounting.addEmployee("Laue");
accounting.addEmployee("Meto");
accounting.printEmployeeInformation();
class ITDepatment extends Department {
    constructor(admin) {
        super("IT");
        this.admin = admin;
    }
}
const dept = new ITDepatment(["St. Meto"]);
console.log(dept);
