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

// --- ACCESS MODIFIERS and METHOD OVERRIDES ---
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

  public introduce() {
    return `Hi I am ${this.name}`;
  }
}

class Dog extends Animal {
  private woofs: boolean;

  constructor(name: string, age: number, legs: number, woofs: boolean) {
    super(name, age, legs);
    this.woofs = woofs;
  }

  public introduce(): string {
    return `Hi I am a dog! I am ${this.age} years old`;
  }
}

class Chicken extends Animal {
  private laysEggs: boolean;
  constructor(name: string, age: number, legs: number, laysEggs: boolean) {
    super(name, age, legs);
    this.laysEggs = laysEggs;
  }

  showLaysEggs(): boolean {
    return this.laysEggs;
  }

  showAge(): number {
    return this.age;
  }

  public introduce(): string {
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
  constructor(
    public name: string,
    public isEdible: boolean,
  ) {}
}

class Tree extends Plant {
  constructor(
    name: string,
    isEdible: boolean,
    public makesShade: boolean,
  ) {
    super(name, isEdible);
  }
}

const plant = new Plant("Nice plant", true);
const tree = new Tree("Tree name", false, true);

class Human {
  constructor(
    public name: string,
    public age: number,
  ) {
    if (age < 0 || age > 150) {
      throw new Error("Warning, Vampire detected!");
    }
  }
}

const human = new Human("Komo", 150);

// --- SETTER AND GETTER
class Vehicle {
  private _age!: number;
  constructor(public color: string) {}

  public set age(age: number) {
    if (age < 0 || age > 150) {
      throw new Error("Vampire or a Time traveller!");
    }
    this._age = age;
  }

  public get age() {
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
  static count: number = 0;

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

// --- GENERIC W/ CLASSES ---
class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  public set value(newValue: T) {
    this._value = newValue;
  }

  public get value() {
    return this._value;
  }
}

const numberBox = new Box(123);
const stringBox = new Box<string>("Hello");
