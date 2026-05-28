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
// --- ACCESS MODIFIERS ---
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
}
class Dog extends Animal {
    woofs;
    constructor(name, age, legs, woofs) {
        super(name, age, legs);
        this.woofs = woofs;
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
export {};
//# sourceMappingURL=index.js.map