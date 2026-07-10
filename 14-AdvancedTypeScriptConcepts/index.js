/*/
// SUB TYPES AND SUPER TYPES
// Supertype: Defines a generic shape of a Person
type Person = {
  name: string;
  age: number;
};

// Subtype: A more specific type of Person
type Employee = Person & {
  employeeId: number;
  department: string;
};

// Subtype: Another specialization of Person
type Student = Person & {
  studentId: number;
  major: string;
};

// Function that accepts a Person but can also work with subtypes
function greet(person: Person): string {
  return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

const employee: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering",
};
const student: Student = {
  name: "Bob",
  age: 22,
  studentId: 2001,
  major: "Computer Science",
};

console.log(greet(employee));
// Works fine since Employee is a subtype of Person

console.log(greet(student));
// Works fine since Student is a subtype of Person

//! THIS will not work because of access property checks - Covered in next lecture
// console.log(greet({ name: "Alice", age: 30, employeeId: 101, department: "Engineering" }));

// */
/*/
// Type Soundness
//! Definition
// Soundness is the idea that the compiler can make guarantees
// about the type a value has at runtime, and not just
// during compilation. This is normal for most programming
// languages that are built with types from day one.

//! Why is a sound type system needed ?
// A sound type system ensures that a program does not have type errors at runtime.

//! Why is flexible and not sound?
// TypeScript, however, is intentionally unsound to allow flexibility and usability for JavaScript developers.

// Building a type system which models a language which has
// existed for a few decades however becomes about making
// decisions with trade-offs on three qualities: Simplicity,
// Usability and Soundness.

// With TypeScript's goal of being able to support all JavaScript
// code, the language tends towards simplicity and usability
// when presented with ways to add types to JavaScript.

// This trade-off helps prevent excessive restrictions that would hinder developer productivity.

//! Some features offered by TypeScript that make it unsound

//* Type Asertions
let value: unknown = "Hello, TypeScript!";

// TypeScript allows assertion without verifying correctness
let str: number = value as number; // No error, but incorrect

console.log(str); // Runtime error: string cannot be used as number

//! Why does this happen?

// Type assertions (as) allow bypassing TypeScript's type system, making code unsafe but more flexible.

type User = {
  name: string;
  age: number;
};

//! Excess Property Checks are Skipped in Assignment
const user = { name: "Alice", age: 25, isAdmin: true };
//! Will still error out if the type is defined on assignment

// Assigning an object with an extra property to User
const newUser: User = user; // No error, even though isAdmin is not in User

console.log(newUser); // Works, but isAdmin is silently ignored

//! Why does this happen?
// TypeScript only checks declared types, not the entire object structure when assigned.
// This allows greater compatibility with JavaScript's dynamic nature.

//! Function Parameter Bivariance
// Bivariance means a function accepting a supertype can be assigned to a function requiring a subtype, which increases flexibility but can lead to unsafe type behavior.
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};

let handleAnimal = (animal: Animal) => {
  console.log(`Handling ${animal.name}`);
};

// You can re-declare the parameter type to be a subtype of
// the declaration. TypeScript accepts a stricter type of Animal
// a type which has additional properties.

let handleDog: (dog: Dog) => void = handleAnimal;

handleDog({ name: "Buddy", breed: "Labrador" }); // Works fine

//! Rest Parameters
// Rest parameters are assumed to all be optional, this means
// TypeScript will not have a way to enforce the number of
// parameters available when using rest parameters

function logNumbers(...numbers: number[]) {
  console.log(numbers);
}

logNumbers(); // Works: No arguments passed
logNumbers(1, 2, 3); // Works: Multiple arguments passed

// A function which returns a void function, can accept a
// function which takes any other type.

const getPI = () => 3.14;

function runFunction(func: () => void) {
  func();
}

console.log(runFunction(getPI));
// The function actually returns a value, but TypeScript treats it as void, leading to confusion.
//*/
/*/
// Nominal vs Structural Type System
// TypeScript is a Structural Type System. A structural type
// system means that when comparing types, TypeScript only
// takes into account the members on the type.

// This is in contrast to nominal type systems, where you
// could create two types but could not assign them to each
// other.

// For example, these two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

ball = tube;
// tube = ball; error

//! Using an intersectional type, with a unique
// constraint in the form of a property called __brand (this
// is convention) which makes it impossible to assign a
// normal string to a ValidatedInputString.

type ValidatedInputString = string & { __brand: "Validated Input" };

// We will use a function to transform a string to
// a ValidatedInputString - but the point worth noting
// is that we're just _telling_ TypeScript that it's true.

const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.trim();
  return simpleValidatedInput as ValidatedInputString; // 'as' forceful assertion
};

// Now we can create functions which will only accept
// our new nominal type, and not the general string type.

const printName = (name: ValidatedInputString) => {
  console.log(name);
};

// printName("John"); error
printName(validateUserInput("John"));

//*/
//*/
// TYPE WIDENING AND NARROWING
const welcomeString = "Hello there";
const replyString = "Hey";
let unionString;
// unionString.length; error
if (unionString) {
    console.log(unionString.length);
}
//*/
//*/
// TOTALITY
// Totality is a concept in TypeScript that refers to functions or operations that handle all possible inputs of a given type without failing at runtime. A function is said to be total if it accounts for all possible cases, ensuring that no unexpected errors occur due to unhandled inputs.
//! What Makes a Function Total?
// A function is considered total if it:
// Handles all possible cases for its input type.
// Does not throw unexpected runtime errors.
// Ensures correctness through exhaustive type checking.
// function getLength(value: string | number): number {
//   if (typeof value === "string") {
//     return value.length;
//   }
//   // This function is partial because it does not handle numbers properly.
// }
// console.log(getLength("hello"));
function getLengthSafe(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value.toString().length;
    }
}
console.log(getLengthSafe("hello")); // 5
console.log(getLengthSafe(42)); // 2
export {};
//*/
//# sourceMappingURL=index.js.map