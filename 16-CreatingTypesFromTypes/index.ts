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

/*/
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
key = "id"; //  Allowed
key = "name"; //  Allowed
// key = "email"; //  Error: Property "email" does not exist on type "UserKeys"

//! Using keyof in Function Parameters and Making a usecase for type U
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice", age: 30 };

console.log(getProperty(user, "name")); //  "Alice"
console.log(getProperty(user, "age")); //  30
// console.log(getProperty(user, "email")); //  Error: Argument of type '"email"' is not assignable
//*/

/*/
// TYPE OFF
//! Using typeof to Create a Type from a Variable
const user = {
  id: 1,
  name: "Alice",
  age: 30,
};

type UserType = typeof user;

const newUser: UserType = { id: 2, name: "Bob", age: 25 }; //  Works fine

// const invalidUser: UserType = { id: 3, name: "Charlie" }; //  Error: Missing 'age' property

//! Using typeof with Function Return Types
function getUser() {
  return { id: 1, name: "Alice", age: 30 };
}

type ReturnUserType = ReturnType<typeof getUser>; // Extracts return type

const anotherUser: ReturnUserType = { id: 3, name: "Charlie", age: 22 }; //  Works fine

//! Using typeof for Constants and Enums
const statusMessages = {
  success: "Operation successful",
  error: "An error occurred",
  loading: "Loading...",
};

type StatusMessages = typeof statusMessages;

type StatusKeys = keyof StatusMessages; // "success" | "error" | "loading"

function getMessage(status: StatusKeys): string {
  return statusMessages[status];
}

console.log(getMessage("success")); //  "Operation successful"
//*/

/*/
// Indexed access types
type User = {
  id: number;
  name: string;
  age: boolean;
};

type UserNameType = User["name"]; // Extracts `string`

type UserIDType = User["id"]; // Extracts `number`

type UserNameOrAge = User["name" | "age"]; // string | number

type UserValues = User[keyof User]; // string | number all value types

const userName: UserNameType = "Alice"; //  Allowed
// const invalidUserName: UserNameType = 42; //  Error: Type 'number' is not assignable to 'string'

//! Using Indexed Access Types in Function
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userData: User = { id: 1, name: "Bob", age: 25 };

const userName2: User["name"] = getProperty(userData, "name"); //  Works fine
const userAge: User["age"] = getProperty(userData, "age"); //  Works fine

// EXAMPLES
type GiraffeHeight = Giraffe["height"]; // number
type LionIsMale = Lion["_isMale"]; // boolean | undefined

//*/

/*/
// MAPPED TYPES
//! Making All Properties Optional using Mapped Types

type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = {
  [K in keyof User]?: User[K];
};

const user1: PartialUser = { name: "Alice" }; //  Allowed
// const user2: PartialUser = { unknownProp: 42 }; //  Error: unknownProp does not exist

//! Mapping Property Types Conditionally
type OptionalIfString<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

type UserWithOptionalStrings = OptionalIfString<User>;
// Equivalent to:
// type UserWithOptionalStrings = {
//   id: number;
//   name?: string;
//   age: number;
// };

// Example
type EditableStrings<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : Readonly<T[K]>;
};

type EditableAnimal = EditableStrings<Animal>;
// name: string     → editable
// age: number      → Readonly<number> — can't change
// isMature: boolean → Readonly<boolean> — can't change
//*/

/*/
// Basic Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>; // "Yes"
type Test3 = IsString<"hello">; // "Yes" — string literal extends string

type Test2 = IsString<number>; // "No"

//! Creating Utility Types with Conditional Types
type OptionalIfString<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K];
};

type User = {
  id: number;
  name: string;
  age: number;
};

type OptionalNameUser = OptionalIfString<User>;

//  Equivalent to:
// type OptionalNameUser = {
//   id: number;
//   name?: string;
//   age: number;
// };

// Worth noting:
// the comment says name?: string but the actual result is name: string | undefined. These are subtly different:
// name?: string  → property can be missing entirely
const user = { id: 1, age: 30 }; //  name not needed

// name: string | undefined  → property must be present, but can be undefined
const user = { id: 1, age: 30 }; //  name key missing
const user = { id: 1, name: undefined, age: 30 }; //  name present but undefined

// To actually get name?: string you'd need -? or ?: in the mapped type instead of | undefined.
//*/

//*/
// TEMPLATE LITERAL TYPES

//! Creating Prefixed Keys for an Object
type Status = "success" | "error" | "pending";
type StatusMessage = `status-${Status}`;

// 2. Multiple unions combine into a cartesian product:
type Direction = "top" | "bottom";
type Side = "left" | "right";
type Corner = `${Direction}-${Side}`;
// "top-left" | "top-right" | "bottom-left" | "bottom-right"

const message1: StatusMessage = "status-success"; // Allowed
const message2: StatusMessage = "status-error"; //  Allowed
// const message3: StatusMessage = "status-failed"; //  Error: "failed" is not a valid Status

//! Using Template Literals with Generics
function createApiEndpoint<T extends string>(route: T): `api/${T}` {
  return `api/${route}` as const;
}

const userEndpoint = createApiEndpoint("users"); // "api/users"
const orderEndpoint = createApiEndpoint("orders"); // "api/orders"

//! Creating Union Types with Dynamic Formatting
type RGB = `rgb(${number}, ${number}, ${number})`;

const color1: RGB = "rgb(255, 0, 0)"; //  Allowed
// const color2: RGB = "rgba(255, 0, 0, 0.5)"; // Error: Incorrect format
//*/
