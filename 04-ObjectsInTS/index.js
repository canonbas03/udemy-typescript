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
let post1 = {
    title: "Post Uno",
    content: "La Alegria",
    date: new Date(),
};
let post2 = {
    title: "Post Dos",
    content: "La Alegria 2",
    date: new Date(),
};
console.log(post2.date);
let post3 = {
    title: "Title tres",
    content: "Bangaranga",
    date: new Date(),
    author: {
        name: "Dara",
        age: 27,
    }
};
console.log(post3.author.age);
let post4 = {
    title: "Title cuatro?",
    content: "Babayaga",
    date: new Date(),
    author: {
        name: "Dara",
        age: 27,
    },
    awards: {
        awrd1: {
            name: "First post award",
            date: new Date(),
        },
        awrd2: {
            name: "Second award - Yay!",
            date: new Date(),
        }
    }
};
//# sourceMappingURL=index.js.map