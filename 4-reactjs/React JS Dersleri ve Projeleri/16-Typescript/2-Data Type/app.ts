// 1.
// //let firstNames:string[]=['Can','Tuba','Merve'];

// let firstNames: Array<string> = ["Can", "Tuba", "Merve"];

// console.log(firstNames);

// let arr = [1, 3, "Apple", "Orange", "Banana", true, false];

// let fruits: Array<string>;
// fruits = ["Apple", "Orange", "Banana"];

// 2.
// let Id: number = 1;
// let instructorName: string = "Can";

// let instructor: [number, string] = [1, "Can"];

// 3.
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instrustor: Person;

instrustor = {
  firstName: "Can",
  lastName: "Boz",
  age: 29,
  jobTitle: "Software Instructor",
};

let person: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

person = {
  firstName: "Can",
  lastName: "Boz",
  age: 29,
  jobTitle: "Software Instructor",
};

console.log(person);
