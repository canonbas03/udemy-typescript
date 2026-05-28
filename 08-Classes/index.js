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
// --- CONSTRUCTOR ---
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
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
    constructor(isAdmin, usersReporting, name, age, lastName) {
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
        ((this.name = name), (this.age = age), (this.legs = legs));
    }
    showAll() {
        return `${this.name} | ${this.age} | ${this.legs}`;
    }
    introduce() {
        return `Hi I am ${this.name}`;
    }
}
class Dog extends Animal {
    woofs;
    constructor(name, age, legs, woofs) {
        super(name, age, legs);
        this.woofs = woofs;
    }
    introduce() {
        return `Hi I am a dog! I am ${this.age} years old`;
    }
}
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
    _age;
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
}
const vehicle = new Vehicle("blue");
vehicle.age = 5;
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
console.log(Counter.count); // 0
Counter.increment();
console.log(Counter.count); // 1
export {};
//# sourceMappingURL=index.js.map