"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "John",
    age: 22,
};
console.log(person.name);
let object1 = {
    name: "dad",
    age: 34,
    gender: "male",
};
person = object1;
//object1 = person;
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
let awardObj = {
    testName: {
        name: "nameee",
        date: new Date(),
    },
    oscar: {
        name: "nameee",
        date: new Date(),
    },
};
awardObj.testName?.date;
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
console.log(`ENGAGEMENT: ${Number(post5.engagement)}`);
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
    wags: true,
};
// NOTICE: We need to have full properties of at least 1 of the union types. Because we need to be able to cast
hybridAnimal;
let d = hybridAnimal;
console.log("dog" + d.wags);
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
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return `Error: ${state.code}`;
        case "success":
            return `Success: ${state.response.title}`;
    }
}
let hybridAnimal2 = {
    name: "Koko",
    barks: true,
    purrs: true,
    sleeps: true, // error without it
    wags: true,
};
let airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 7867856751,
    },
    seats: {
        A1: "John Doe",
        A2: "Mark Doe",
        A3: "Sam Doe",
    },
};
//# sourceMappingURL=index.js.map