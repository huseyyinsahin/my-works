// // 1.Function

// function add(a: number, b: number):number {
//   return a + b;
// }

// let toplam = add(10, 20);

// console.log(typeof (toplam));

// function bastir() {
//   console.log("Can Boz");
//   return 35;
// }

// let degisken = bastir();
// console.log(degisken);

// function birlestir(ad: string, soyad: string): string {
//   return ad + ' ' + soyad;
// }

// let degisken = birlestir("Can", "Boz");
// console.log(degisken);

// function birlestir(ad: string, soyad: string = "Boz"): string {
//   return ad + ' ' + soyad;
// }

// let degisken = birlestir("Can", "Bozzzzz");
// console.log(degisken);

// 2.Optional Parameters-Arrow Function

// function carpim(a: number, b: number, c?: number) {
//     console.log(typeof (c));
//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }

//     return a * b;
// }

// let degisken = carpim(5, 10);
// console.log(degisken);

// function carpim(a: number, b: number): number {
//     return a * b;
// }

// let carpim = (a: number, b: number): number => {
//   return a * b;
// }
// let carpim = (a: number, b: number): number => a * b;

// let degisken = carpim(4, 5);
// console.log(degisken);

// let bastir = () => {

//   console.log("Can Boz");
// }

// let bastir = () console.log("Can Boz");

// bastir();

// 3.Function Overloading

function add(a: number, b: number): number {
  return a + b;
}

let degisken1 = add(4, 5);
console.log(degisken1);

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

let degisken = add(5, 9);
console.log(degisken);
