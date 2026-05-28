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
  name: string;
  age: number;
  constructor(name: string, age: number) {
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
const user3: User1 = new User1("Miranda", 31);

// --- OPTIONAL AND READONLY FIELDS ---
class User2 {
  readonly name: string;
  age: number;
  lastName?: string | undefined;
  constructor(name: string, age: number, lastName?: string) {
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
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    isAdmin: boolean,
    usersReporting: number,
    name: string,
    age: number,
    lastName?: string | undefined,
  ) {
    super(name, age, lastName);
    this.isAdmin = isAdmin;
    this.usersReporting = usersReporting;
  }
}

const justUser: User2 = new User2("NormalUser", 24, "lName");
const admin: Admin = new Admin(true, 12, "Josh", 25);

console.log(justUser);
console.log(admin);

// --- ACCESS MODIFIERS ---
class Animal {
  name: string;
  protected age: number;
  private legs: number;

  constructor(name: string, age: number, legs: number) {
    ((this.name = name), (this.age = age), (this.legs = legs));
  }

  public showAll() {
    return `${this.name} | ${this.age} | ${this.legs}`;
  }
}

class Dog extends Animal {
  private woofs: boolean;

  constructor(name: string, age: number, legs: number, woofs: boolean) {
    super(name, age, legs);
    this.woofs = woofs;
  }
}

class Chicken extends Animal {
  private laysEggs: boolean;
  constructor(name: string, age: number, legs: number, laysEggs: boolean) {
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
