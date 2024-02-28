// 1. Type Assertion
// let code:any =123;
// let empCode=<number>code;
// console.log(typeof(empCode));
// interface Employee {
//     name:string,
//     code:number
// }
// let employee=<Employee>{};
// console.log(typeof(employee));
// employee.name="can";
// console.log(employee);
// 2. If Else
// let x : number =15;
// let y : number =25;
// if(x>y){
//     console.log("X Y den büyüktür");
// }
// else if(x<y){
//     console.log("X Y den küçüktür");
// }
// else{
//     console.log("X Y ye eşittir");
// }
// x > y ? console.log("X Y den büyüktür") : console.log("X Y den kücüktür veya eşittir")
// 3. Switch Case
// let day: number = 26;
// switch (day) {
//     case 0:
//         console.log("Pazar");
//         break;
//     case 1:
//         console.log("Pazartesi");
//         break;
//     case 2:
//         console.log("Salı");
//         break;
//     case 3:
//         console.log("Çarşamba");
//         break;
//     case 4:
//         console.log("Perşembe");
//         break;
//     case 5:
//         console.log("Cuma");
//         break;
//     case 6:
//         console.log("Cumartesi");
//         break;
//     default:
//         console.log("Böyle bir gün yok");
//         break;
// }
// 4. For Loop
// for (let i = 0; i < 3; i++) {
//     console.log("İ degerim", i);
// }
// let arr = [10, 20, 30, 40];
// for (let item of arr) {
//     console.log(item);
// }
// let str = "Can Boz";
// for (let item in arr) {
//     console.log(item);
// }
// 5.While Loop
var counter = 10;
while (counter < 5) {
    console.log(counter);
    counter++;
    if (counter == 3) {
        break;
    }
}
do {
    console.log(counter);
    counter++;
} while (counter < 5);
