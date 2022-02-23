console.log("working eith class and oop");

// define a class
class Department {
  // define pps
  // name: string; initialze in the contructor
  private employee: string[] = [];

  //special method-
  constructor(private name: string) {
    this.name = name;
  }

  //   function/metod
  describe() {
    console.log(`Depaertment is ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee);
  }
}

// create the class object and pass the argument to the constructor object
const accounting = new Department("Accounting");

console.log(accounting);

// call decribe method outside the class
accounting.describe();

// this will be unudefine since accouniring copy is what is efernced for the name as this keyword
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();

// another method within the class
accounting.addEmployee("Laue");
accounting.addEmployee("Meto");

// accounting.employee[2]='Not Allowed' not valid since the identifies is private

accounting.printEmployeeInformation();

// ************************************************
// Inheritance
class ITDepatment extends Department {
  admin:string[]
  constructor(admin: string[]) {
    super("IT"); //refencing the constructor ofthe base class
    this.admin = admin;
  }
}

const dept = new ITDepatment(["St. Meto"]);

console.log(dept);
