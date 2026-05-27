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
export {};
//# sourceMappingURL=index.js.map