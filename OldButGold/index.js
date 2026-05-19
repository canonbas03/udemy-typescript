"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Dzhan234";
console.log(name);
let myVar = 123;
myVar = 'Hello';
//  Type Casting
// API
let userPlus = {
    name: "Dzhan",
    email: "dyonbash@email.com",
    field: "uuuu"
};
// annotated wrongUser with type User, the shape doesnt match
let wrongUser = {
    name: "myname",
    email: "iiii",
    // field: "ytff"
};
function fetchUser() {
    return userPlus;
}
const fetchedUser = fetchUser();
fetchedUser.email;
const fullUser = fetchedUser;
fullUser.field;
// Final quiz
let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79; // 79
let newAge = oldAge; // 79
let data = new Map(); //map
let score = [90, 86, 100]; // num array
/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */
// age = 85; // no it is const
// score.push(10); //yes
// score.push("New Score"); // no
// let customAge: CustomAge = 50; // no
// let primitive: Primitive = new Date(); // no
// let years: CheckScore = []; // false
let oldAge1 = 79; // number
const constAge = 80;
//constAge += 5;
oldAge += 5;
//# sourceMappingURL=index.js.map