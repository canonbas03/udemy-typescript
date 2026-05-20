let person = {
    name: "John",
    age: 22,
}
console.log(person.name)
// person = []; error

let car: Object = {
    brand: "Lambo",
    horsePower: 3000
}
// console.log(car.brand); error

// all inherit from the global Object
car = [];
car = {};
car = () => {};

let newCar: {
    brand: string;
    horsePower: number;
} = {
    brand: "BMW",
    horsePower: 2500,
}

// newCar = []; error

//  We create a type alias
type Car = {
    brand: string;
    horsePower: number;
}

let newCar2: Car = {
    brand: "Mercedes",
    horsePower: 4444,
}
console.log(newCar2.brand);

let cat: object = {
    name: "Koko",
    legs: 4, 
}
//console.log(cat.name); error

console.log(typeof cat);