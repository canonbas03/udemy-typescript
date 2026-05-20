"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// implicit casting (TS auto cast)
console.log(5 + "10"); // 510
// --- explicit casting ---
// string to number
console.log(5 + Number("10"));
// Number <-> String
let age = 22;
const stringVal = String(age) + age.toString();
console.log(stringVal); // 2222
let num1 = Number("hello");
console.log(num1 + 3); // NaN
let num2 = Number("hello");
console.log(num2 + "wow"); // NaNwow
// --- Boolean <-> String ---
// explicit casting
let isComplete = true;
const word = String(isComplete);
console.log(word[2]); // u
let bool1 = Boolean("true");
let bool2 = Boolean("false");
if (!bool2) {
    console.log("bool2 is false");
}
else {
    console.log("both bool1 and bool2 are true");
}
const stringToCheck = "false";
let bool3 = stringToCheck === "false" ? false : true;
if (!bool3) {
    console.log("bool3 is false");
}
// implicit casting
let isTrue = true;
let numAndBool = 5 + Number(isTrue);
let numAndBool2 = 5 + (+isTrue);
console.log("5 + Number(isTrue) => " + numAndBool); // 6
console.log("5 + (+isTrue) => " + numAndBool2); // 6
//# sourceMappingURL=casting.js.map