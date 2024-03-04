// 1. Inheritance

// class Person {
//   id: number;
//   firstName: string;
//   lastName: string;

//   constructor(id: number, firstName: string, lastName: string) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// //Person parent Employee child class
// //super keywordü ile parent class ın constructor ını tetikliyorsun
// class Employee extends Person {
//   constructor(id: number, firstName: string, lastName: string) {
//     super(id, firstName, lastName);
//   }
// }

// let employee = new Employee(29, "Can", "Boz");
// console.log(employee.getFullName());

// 2. Static Methods - Properties

// class Circle {
//   static pi: number = 3.14;
//   pi = 3;

//   constructor() {
//       this.pi++;
//       Circle.pi++;
//   }

//   static hesapla(yaricap: number) {
//       return this.pi * yaricap * yaricap;
//   }
// }

// let objem = new Circle();
// let objem2 = new Circle();

// console.log(objem.pi);

// console.log(Circle.pi);
// console.log(Circle.hesapla(5));

// 3.Abstract Class

// abstract class Department {
//   constructor(public name: string) { }

//   printName(): void {
//       console.log("Department name: " + this.name);
//   }
//   abstract printMeeting(): void;

//   // abstract generateReports(): void;
// }

// //abstract classların tek başına new instance ını alamazsınız
// //fakat reference verebilirsiniz
// //abstract class içinde abstract metodları mutlaka extend ettiğiniz class ta implemente
// //etmeniz lazım

// class AccountingDepartment extends Department {
//   constructor() {
//       super("Accounting and Auditing");
//   }

//   printMeeting(): void {
//       console.log("The Accounting Department meets each Monday at 10am.");
//   }

//   generateReports(): void {
//       console.log("Generating accounting reports...");
//   }

// }

// let department: Department
// department = new AccountingDepartment();
// department.printName();
// department.printMeeting();
// // department.generateReports();

// 4.Interface

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function getFullName(person: Person) {
//   return `${person.firstName} ${person.lastName}`;
// }

// let person = {
//   firstName: "Huseyin",
//   lastName: "Sahin",
//   age: 23,
// };

// console.log(getFullName(person));

// 5.Optional Parameters - Readonly

// interface Person {
//     firstName: string,
//     lastName: string,
//     middleName?: string
// }

// function getFullName(person: Person) {
//     if (person.middleName) {
//         return `${person.firstName} ${person.middleName} ${person.lastName}`;
//     }
//     return `${person.firstName} ${person.lastName}`;
// }

// let person: Person = {
//     firstName: 'Hüseyin',
//     lastName: 'Şahin'
// };

// person.firstName = "Hüseyinnnn";

// console.log(getFullName(person));

// interface StringFormat {
//   (str: string, isUpper: boolean): string;
// }

// let format: StringFormat;

// format = function (str: string, isUpper: boolean) {
//   return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
// };

// console.log(format("Hüseyin Şahin", true));

// 6. Interface Extend - Implement

// interface IPerson {
//     name: string;
//     gender: string;
// }

// interface IEmployee extends IPerson {
//     empNumber: number;
// }

// interface IWorker extends IPerson {
//     empDepartment: string;
// }

// let employee: IEmployee = {
//     empNumber: 1,
//     gender: 'Male',
//     name: 'Can'

// }

// let employeeDepartment: IWorker = {
//     empDepartment: 'Software Department',
//     gender: 'Male',
//     name: 'Can'

// }

// console.log(employee);
// console.log(employeeDepartment);

// interface IPerson {
//   name: string;
//   gender: string;
// }

// class Employee implements IPerson {
//   empNumber: number;
//   name: string;
//   gender: string;
//   constructor(empNumber: number, name: string, gender: string) {
//     this.empNumber = empNumber;
//     this.name = name;
//     this.gender = gender;
//   }
// }

// let employee = new Employee(5, "Can", "Male");
// console.log(employee);

// 7.Type Intersection

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  name: string;
  id: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;

let kisim: Employee = {
  id: 54,
  name: "Hüseyin Şahin",
  email: "sdasd@hotmail.com",
  phone: "345435345324",
};

console.log(kisim);

type Customer = BusinessPartner & Contact;

let musterim: Customer = {
  credit: 2121,
  email: "asdas@hotmail.com",
  name: "Hüseyin Şahin",
  phone: "3423423324",
};

console.log(musterim);
