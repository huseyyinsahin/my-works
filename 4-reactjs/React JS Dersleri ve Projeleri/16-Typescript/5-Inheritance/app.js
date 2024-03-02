// 1. Inheritance
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Huseyin",
    lastName: "Sahin",
    age: 23,
};
console.log(getFullName(person));
