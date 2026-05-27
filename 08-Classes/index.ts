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

//export {};
