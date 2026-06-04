// --- FIRST CLASS ---
class User {
    name = "John";
    email = "john@email.com";
    greet() {
        return `${this.name} ${this.email}`;
    }
}
const user = new User();
console.log(user);
console.log(user.greet);
let name = `sfsf`;
// --- CONSTRUCTOR ---
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(this);
        return `${this.name} ${this.age}`;
    }
}
const user2 = new User1("Jack", 34);
console.log(user2.greet());
// --- CLASS AS A TYPE ---
const user3 = new User1("Miranda", 31);
// --- OPTIONAL AND READONLY FIELDS ---
class User2 {
    name;
    age;
    lastName;
    constructor(name, age, lastName) {
        this.name = name;
        this.age = age;
        this.lastName = lastName;
    }
    greet() {
        return `${this.name} ${this.age}`;
    }
}
const user4 = new User1("Jack", 34);
console.log(user2.greet());
// --- INHERITANCE ---
class Admin extends User2 {
    isAdmin = true;
    usersReporting;
    constructor(isAdmin, usersReporting, name, age, lastName = "admin") {
        super(name, age, lastName);
        this.isAdmin = isAdmin;
        this.usersReporting = usersReporting;
    }
}
const justUser = new User2("NormalUser", 24, "lName");
const admin = new Admin(true, 12, "Josh", 25);
console.log(justUser);
console.log(admin);
// --- ACCESS MODIFIERS and METHOD OVERRIDES ---
class Animal {
    name;
    age;
    legs;
    constructor(name, age, legs) {
        this.name = name;
        this.age = age;
        this.legs = legs;
    }
    showAll() {
        return `${this.name} | ${this.age} | ${this.legs}`;
    }
    introduce() {
        return `Hi I am ${this.name}`;
    }
    sayGoodbye() {
        return "Goodbye!";
    }
}
// Why would we use short-hand constructors ???
class Dog extends Animal {
    woofs;
    //private woofs: boolean;
    constructor(name, age, legs, woofs) {
        super(name, age, legs);
        this.woofs = woofs;
        this.woofs = woofs;
    }
    introduce() {
        const text = `Hi I am a dog! I am ${this.age} years old`;
        let result = `${super.introduce()} ${text} ${super.sayGoodbye()}`;
        return result;
    }
}
//const introDog = new Dog();
class Chicken extends Animal {
    laysEggs;
    constructor(name, age, legs, laysEggs) {
        super(name, age, legs);
        this.laysEggs = laysEggs;
    }
    showLaysEggs() {
        return this.laysEggs;
    }
    showAge() {
        return this.age;
    }
    introduce() {
        return `I gonna lay an egg! I am a chicken.`;
    }
}
const animal = new Animal("Bobi", 2, 4);
const dog = new Dog("Miko", 4, 4, true);
console.log("==============");
console.log(dog.introduce());
const chicken = new Chicken("Koko", 3, 2, true);
console.log(animal.name);
console.log(animal.showAll());
console.log(dog.showAll());
console.log(chicken.showAll());
console.log(chicken.showLaysEggs());
console.log(chicken.showAge());
console.log(animal.introduce());
console.log(dog.introduce());
console.log(chicken.introduce());
// --- SHORT CONSTRUCTOR ---
class Plant {
    name;
    isEdible;
    constructor(name, isEdible) {
        this.name = name;
        this.isEdible = isEdible;
    }
}
class Tree extends Plant {
    makesShade;
    constructor(name, isEdible, makesShade) {
        super(name, isEdible);
        this.makesShade = makesShade;
    }
}
const plant = new Plant("Nice plant", true);
const tree = new Tree("Tree name", false, true);
class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (age < 0 || age > 150) {
            throw new Error("Warning, Vampire detected!");
        }
    }
}
const human = new Human("Komo", 150);
// --- SETTER AND GETTER
class Vehicle {
    color;
    static DEFAULT_AGE = -1;
    _age = Vehicle.DEFAULT_AGE;
    constructor(color) {
        this.color = color;
    }
    set age(age) {
        if (age < 0 || age > 150) {
            throw new Error("Vampire or a Time traveller!");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not set");
        }
        return this._age;
    }
    getAge() {
        return this._age;
    }
}
const vehicle = new Vehicle("blue");
if (vehicle.age == Vehicle.DEFAULT_AGE) {
}
//vehicle.age = 5;
// let a : string = vehicle.getAge();
// console.log(a)
console.log(vehicle.age);
console.log("TTTTTETETETETE");
// --- STATIC BLOCKS ---
class Counter {
    static count = 0;
    static increment() {
        this.count++;
    }
    static {
        console.log(`Initializing Counter class`);
    }
}
console.log("efeffefefefAAAa");
console.log(Counter.count); // 0
Counter.increment();
console.log(Counter.count); // 1
// --- GENERIC W/ CLASSES ---
class Box {
    _value;
    constructor(value) {
        this._value = value;
    }
    set value(newValue) {
        this._value = newValue;
    }
    get value() {
        return this._value;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("Hello");
class Repository {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getById(id) {
        return this.items.find((item) => item.id == id);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        return (this.items = this.items.filter((item) => item.id !== id));
    }
}
const personRepo = new Repository();
personRepo.addItem({ id: 1, name: "Joe", age: 17 });
personRepo.addItem({ id: 2, name: "Miranda", age: 19 });
console.log(personRepo.getById(2));
console.log(personRepo.getAll());
personRepo.removeById(1);
console.log(personRepo.getAll());
// --- MIXINS ---
class Building {
    type;
    constructor(type) {
        this.type = type;
    }
}
function Timestamp(Base) {
    return class extends Base {
        timestamp = new Date();
        getTimestamp() {
            return this.timestamp;
        }
    };
}
class buildingWithMixins extends Timestamp(Building) {
    age;
    constructor(type, age) {
        super(type);
        this.age = age;
    }
    displayInfo() {
        console.log(`${this.type} is ${this.age} years old`);
        console.log(`Timestamp: ${this.getTimestamp()}`);
    }
}
const mixinBuilding = new buildingWithMixins("apartment", 120);
mixinBuilding.displayInfo();
mixinBuilding.getTimestamp();
export {};
//# sourceMappingURL=index.js.map