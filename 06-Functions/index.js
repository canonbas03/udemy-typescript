"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- DECLARATION ---
// Named function
function intro(name, age) {
    return `${name} is ${age} years old`;
}
// Function expression
const intro2 = function (name, age) {
    return `${name} is ${age} years old`;
};
// Arrow function
const intro3 = (name, age) => {
    return 5;
};
// --- DEFAULT AND OPTIONAL PARAMETERS ---
function intro4(name, age, gender) {
    if (gender) {
        return `${name} is a ${gender}, ${age} years old.`;
    }
    return `${name} is ${age} years old.`;
}
console.log(intro4("John", 18, "male"));
// Exercise with optional parameter of type Enum
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "undefined";
})(Gender || (Gender = {}));
function intro5(name, age, gender) {
    return intro4(name, age, gender);
}
console.log(intro5("Jack", 42, Gender.Male));
//# sourceMappingURL=index.js.map