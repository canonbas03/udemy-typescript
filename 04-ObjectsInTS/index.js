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
    horsePower: 3000,
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
    },
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
        },
    },
};
let post5 = {
    title: "Title cinco",
    content: "BabaVanga",
    date: new Date(),
    author: {
        name: "Dara",
        age: 27,
        type: "ai",
    },
    awards: {
        awrd1: {
            name: "First post award",
            date: new Date(),
        },
        awrd2: {
            name: "Second award - Yay!",
            date: new Date(),
        },
    },
};
// NOTICE: We have declared a "type" prop, but TS doesnt throw an error, because it is optional
console.log(post5.title); // title cinko
post5.title = "new title of cinko 5";
console.log(post5.title); // new title of cinko 5
console.log(post5.author.type); // ai
let dog = {
    name: "bobi",
    barks: true,
    wags: true,
};
let hybridAnimal = {
    name: "Koko",
    barks: true,
    purrs: true,
    sleeps: true, // error without it
};
let user = {
    id: 1,
    name: "John Doe",
    contact: {
        email: "john@example.com",
    },
    preferences: {
        theme: "dark",
        language: "English",
    },
    additionalInfo: "This is an example of an index signature property",
};
// user.id = 5 error
//# sourceMappingURL=index.js.map