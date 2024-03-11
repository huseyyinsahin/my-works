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
// function getRandomNumber(items: number[]): number {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// let numbers = [1, 54, 65, 7, 8];
// // console.log(getRandomNumber(numbers));
// function getRandomString(items: string[]): string {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// let adlarim = ["Can", "Tuba", "Merve"];
// // console.log(getRandomString(adlarim));
// // function getRandomElement(items: any[]): any {
// //     let randomIndex = Math.floor(Math.random() * items.length);
// //     return items[randomIndex];
// // }
// let degiskenlerim = [true, false, true];
// function getRandomElement<T>(items: T[]): T {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<string>(adlarim));
// console.log(getRandomElement(degiskenlerim));
// 3.Generic Constrains
// function merge<U extends object, V extends object>(obj1: U, obj2: V) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// let person = merge(
//   { name: "Can" },
//   // { age: 29 }
//   29
// );
// console.log(person);
// 4. Interface Generic
// interface Months<U, V> {
//     key: U,
//     value: V
// }
// let month: Months<number, string> = {
//     key: 1,
//     value: 'January'
// }
// console.log(month);
// interface Collection<T> {
//   add(o: T): void;
//   remove(o: T): void;
// }
// class List<T> implements Collection<T> {
//   private items: T[] = [];
//   add(o: T): void {
//     this.items.push(o);
//     console.log(this.items);
//   }
//   remove(o: T): void {
//     let index = this.items.indexOf(o);
//     if (index > -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }
// let list = new List<number>();
// for (let i = 0; i < 10; i++) {
//   list.add(i);
// }
// 5. Class Generic
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers = new Stack(5);
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
