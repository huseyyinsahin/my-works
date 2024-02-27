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
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };

// let instrustor: Person;

// instrustor = {
//   firstName: "Can",
//   lastName: "Boz",
//   age: 29,
//   jobTitle: "Software Instructor",
// };

// let person: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// };

// person = {
//   firstName: "Can",
//   lastName: "Boz",
//   age: 29,
//   jobTitle: "Software Instructor",
// };

// console.log(person);

// 4.
// enum Media {
//   Newspaper,
//   Newsletter,
//   Magazine,
//   book,
// }
// console.log(Media.Magazine);
// console.log(Media[3]);

// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZINE",
//   book = "BOOK",
// }

// console.log(PrintMedia.Newsletter);
// console.log(PrintMedia["Newspaper"]);

// 5.
// let code: string | nmuber | boolean = "123";

// code = 12345;
// console.log(code);

// 6.

// let someThing: any = "Hello";
// someThing=45;
// console.log(someThing);

// 7.
// function sayHello():void{
//   console.log('Hi');
// }
// sayHello();

// 8.
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }


// throwError("Hata");


// let something:void=undefined;
// let nothing :never=null;

// 9. Type Inference

let sayac = 0;
// let sayac:number = 0;
console.log(typeof (sayac));


// function increment(counter: number){
//     return counter++;
// }

function increment(counter: number): number {
    return counter++;
}

// let a ="some text";
// let b = 123;
// a=b;


function sum(a: number, b: number) {
    return a + b;
}

// let total:number = sum(10,15);
let total: string = sum(10, 15);