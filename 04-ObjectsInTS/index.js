"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "John",
    age: 22,
};
console.log(person.name);
// person = []; error
let car = {
    brand: "Lambo",
    horsePower: 3000
};
// console.log(car.brand); error
// all inherit from the global Object
car = [];
car = {};
car = () => { };
let newCar = {
    brand: "BMW",
    horsePower: 2500,
};
let newCar2 = {
    brand: "Mercedes",
    horsePower: 4444,
};
console.log(newCar2.brand);
let cat = {
    name: "Koko",
    legs: 4,
};
//console.log(cat.name); error
console.log(typeof cat);
//# sourceMappingURL=index.js.map