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
let wrongUser = {
    name: "myname",
    email: "iiii",
    // bhhh: "ytff"
};
function fetchUser() {
    return userPlus;
}
const fetchedUser = fetchUser();
fetchedUser.email;
// Final quiz
let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79; // number
let newAge = oldAge; // number
let data = new Map(); //map
let score = [90, 86, 100]; // tuple
/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */
// age = 85; // no it is const
// score.push(10); //yes
// score.push("New Score"); // yes
// let customAge: CustomAge = 50; // no
// let primitive: Primitive = new Date(); // no
// let years: CheckScore = []; // false
//# sourceMappingURL=index.js.map