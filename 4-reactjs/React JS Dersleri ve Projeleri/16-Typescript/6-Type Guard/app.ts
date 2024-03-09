// // 1.Type Guard

// // type tip = string | number;

// // function add(a: tip, b: tip) {
// //     if (typeof a === 'number' && typeof b === 'number') {
// //         return a + b;
// //     }

// //     if (typeof a === 'string' && typeof b === 'string') {
// //         return a.concat(b);
// //     }

// //     throw new Error('Lufen doğru formatta data gönderin');
// // }

// // console.log(add(5, "Boz"));

// class Customer {
//   isCreditAllowed(): boolean {
//     // ...
//     return true;
//   }
// }

// class Supplier {
//   isInShortList(): boolean {
//     // ...
//     return true;
//   }
// }

// type BusinessPartner = Customer | Supplier;

// function signContract(partner: BusinessPartner): string {
//   let message: string;
//   if (partner instanceof Customer) {
//     message = partner.isCreditAllowed()
//       ? "Sign a new contract with the customer"
//       : "Credit issue";
//   }

//   if (partner instanceof Supplier) {
//     message = partner.isInShortList()
//       ? "Sign a new contract the supplier"
//       : "Need to evaluate further";
//   }

//   return message;
// }

// 2. Generics

function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let adlarim = ["Can", "Tuba", "Merve"];
// console.log(getRandomString(adlarim));

// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }

let degiskenlerim = [true, false, true];
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(adlarim));
console.log(getRandomElement(degiskenlerim));
