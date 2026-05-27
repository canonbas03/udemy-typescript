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
}

const justUser: User2 = new User2("NormalUser", 24, "lName");
const admin: Admin = new Admin("adminName", 33);

console.log(justUser);
console.log(admin);
