/*/
// GENERIC INTERFACES
interface Box<Type> {
  content: Type;
  size: number;
}

const stringBox: Box<string> = {
  content: "String, hello",
  size: 3,
};

const numberBox: Box<number> = {
  content: 12,
  size: 4,
};

const boxBox: Box<typeof numberBox> = {
  content: numberBox,
  size: 0,
};

interface hasLength {
  length: number;
}
function logLength<T extends hasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");
logLength({ length: 12 });
//*/

//*/
// KEYOFF OPERATOR
// The keyof type operator in TypeScript is a powerful tool that allows us to create new types from existing types by extracting the keys (property names) of an object type as a union of string literals.

//! Extracting Keys from an Object Type

type User = {
  id: number;
  name: string;
  age: number;
};

//! Just an example of what keyOf operator gives us
type UserKeys = keyof User; // "id" | "name" | "age"

let key: UserKeys;
key = "id"; // ✅ Allowed
key = "name"; // ✅ Allowed
// key = "email"; // ❌ Error: Property "email" does not exist on type "UserKeys"

//! Using keyof in Function Parameters and Making a usecase for type U
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice", age: 30 };

console.log(getProperty(user, "name")); // ✅ "Alice"
console.log(getProperty(user, "age")); // ✅ 30
// console.log(getProperty(user, "email")); // ❌ Error: Argument of type '"email"' is not assignable
//*/
