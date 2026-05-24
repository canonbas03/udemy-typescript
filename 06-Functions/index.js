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
// --- CUSTOM PARAMETERS AND RETURN TYPES ---
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person = {
    name: "Josh",
    age: 20,
    ageUnit: AgeUnit.Years,
};
// Pure function
console.log("           === PURE ===");
function convertAgeToMonthsPure(person) {
    if (person.ageUnit === AgeUnit.Years) {
        return {
            ...person,
            age: person.age * 12,
            ageUnit: AgeUnit.Months,
        };
    }
    return person;
}
const person3 = person;
console.log(person);
console.log(convertAgeToMonthsPure(person3));
console.log(person);
// NOTICE: Whe using spread operator (...person), we are spreading all the props it has, and we just override by redeclaring whatever needs to be changed.
console.log("           === UNPURE ===");
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
const person2 = person;
console.log(person);
console.log(convertAgeToMonths(person2));
console.log(person);
const person4 = {
    name: "Josh",
    age: 20,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting}, ${person4.name}!`;
    },
};
console.log(person4.greet("Hiii"));
//# sourceMappingURL=index.js.map