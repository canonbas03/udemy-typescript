/*/
// MAPPED TYPES

// Partial type
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Animal = {
  name: string;
  age: number;
  isMature: boolean;
};

type PartialAnimal = Partial<Animal>;

const partAnim: PartialAnimal = {};
// becomes:
// {
//     name?: string;
//     age?: number;
//     isMature?: boolean;
// }

const giraffe1: Animal = {
  name: "Giraffe1",
  age: 12,
  isMature: true,
};
function updateAnimal(animal: Animal, changes: Partial<Animal>): Animal {
  return { ...animal, ...changes };
}

// Scenario, we want to change ONLY the name of giraffe Animal obj
// WITHOUT Partial — must pass all 3 fields even if you only want to change name
updateAnimal(giraffe1, { name: "Jeff", age: 12, isMature: true });

// WITH Partial — only pass what you want to change
updateAnimal(giraffe1, { name: "Jeff" });
updateAnimal(giraffe1, { name: "New Name" }); // only update name, rest stays

function updateAnimal1(animal: Animal, changes: Partial<Animal>): Animal {
  return { ...animal, ...changes };
  // { name: "Giraffe1", age: 12, isMature: true } <- original
  //                     +
  // { name: "Jeff" }                               <- changes
  //                     =
  // { name: "Jeff", age: 12, isMature: true }      <- result
}

// The spread ...animal copies all original values, then ...changes overwrites only the ones you passed in. Properties you didn't pass stay as they were.

// Conditional types
type Exclude<T, U> = T extends U ? never : T;

// If T is assignable to U, return never (remove it), otherwise return T (keep it).
// Never is TypeScript's way of saying "this type doesn't exist" — anything typed as never gets removed from a union.

type Animals = "lion" | "giraffe" | "snake" | "crocodile";
type Reptiles = "snake" | "crocodile";

type Mammals = Exclude<Animals, Reptiles>;
// becomes: "lion" | "giraffe"

// "lion"      extends Reptiles ? never : "lion"      → "lion"   ✅ kept
// "giraffe"   extends Reptiles ? never : "giraffe"   → "giraffe" ✅ kept
// "snake"     extends Reptiles ? never : "snake"     → never     ❌ removed
// "crocodile" extends Reptiles ? never : "crocodile" → never     ❌ removed

// Another practical example:
type Actions = "walk" | "run" | "swim" | "fly";
type LionActions = Exclude<Actions, "swim" | "fly">;
// "walk" | "run"

//*/

/*/
// AWAITED UTILITY TYPE
// We might have an API and we dont know the type beforehand
const promise: Promise<number> = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

type AwaitedType = Awaited<typeof promise>;

// Awaited is a built-in utility type that unwraps a Promise type — it gives you the type of the value the Promise resolves to.

// typeof promise gets the type of the variable (Promise<number>), then Awaited unwraps it to just number.
// It's useful when you have a function that returns a Promise and you want the resolved type without calling it:
class Giraffe {
  constructor(
    name: string,
    ag: number,
    isMale: boolean,
    isMature: boolean,
    height: number,
  ) {}
}

async function fetchGiraffe(): Promise<Giraffe> {
  return new Giraffe("Jeff", 12, true, false, 350);
}

type GiraffeResult = Awaited<ReturnType<typeof fetchGiraffe>>; // typeof gets () => Promise<Giraffe>
// GiraffeResult = Giraffe, not Promise<Giraffe>
//*/

/*/
// RECORD UTILITY TYPE
// Record<Keys, Type> is a built-in utility type that creates an object type where all keys come from Keys and all values are of Type

type Roles = "author" | "editor" | "researcher";

interface User {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  contributors: Record<Roles, User>;
}

const article: Article = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urna, eleifend at malesuada id, suscipit eu",
  // Contributors can be type generated from Roles type and User interface
  contributors: {
    author: { name: "John", email: "john@email.com", age: 32 },
    editor: { name: "Frank", email: "frank@email.com", age: 36 },
    researcher: { name: "Mark", email: "mark@email.com", age: 36 },
  },
};

// Record<Roles, User>
// becomes:
// {
//     author: User;
//     editor: User;
//     researcher: User;
// }

// In JavaScript, object keys can only be 3 things: string, number, symbol
//*/

/*/
// PICK UTILITY TYPE
//  Pick<Type, Keys>; Pick constructs a new type by selecting a subset of properties from an existing type.

interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Pick<Person, "name" | "age">;

const person: NameAndAge = {
  name: "John",
  age: 32,
};

person.name = "Else";

//type NameAndAge = Pick<Person, "name" | "age">;
// Equivalent to:
// type NameAndAge = {
//   name: string;
//   age: number;
// }

// COMMON USE CASES
// 1. Form state — only fields you need
type PersonForm = Pick<Person, "name" | "age">;

// 2. API response shaping
type PublicProfile = Pick<Person, "name">;

// 3. Combining with other utilities
type ReadonlyName = Readonly<Pick<Person, "name">>;
// → { readonly name: string }

type PartialAddress = Partial<Pick<Person, "address">>;
// → { address?: string }
//*/

/*/
// Omit<OldType, Keys>; Omit is the inverse of Pick — instead of selecting which properties to keep, you select which to remove.

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type LimitedUser = Omit<User, "password" | "age">;
// becomes:
// {
//   name: string;
//   email: string;
// }

function getPublicUser(user: User): LimitedUser {
  const { password, age, ...rest } = user; // destructing user
  return rest; // only name and email
}
//*/

/*/
// Required<Type>;
// Required is the opposite of Partial — it makes all optional properties mandatory.
interface User {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

type RegisterUser = Required<Pick<User, "email" | "password">>;

// Under the hood Required looks like this:
type Required<T> = {
  [P in keyof T]-?: T[P];
};
// The -? is the interesting part — the minus sign removes the ? from every property, making them all required.

function register(user: RegisterUser) {
  // TypeScript guarantees email and password are always here
  console.log(user.email); // string, never undefined
  console.log(user.password); // string, never undefined
}

register({ email: "john@email.com", password: "secret" }); // ✅
// register({ email: "john@email.com" }); // ❌ TS error, password missing
//*/

/*/
// Readonly<Type>
// Readonly makes all properties immutable — they can be set once at creation but never reassigned.
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "John",
  age: 32,
};

user.name = "Something Else";

// Under the hood:
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
// adds readonly modifier to every property

// Common Use cases:
// 1. Configuration objects that should never change
const CONFIG: Readonly<Config> = {
  apiUrl: "https://api.example.com",
  maxRetries: 3,
};

// 2. Function parameters you want to guarantee won't be mutated
function displayUser(user: Readonly<User>): void {
  user.name = "hacked"; // ❌ TS error — protects the caller's object
  console.log(user.name); // ✅
}

// 3. Combining with other utilities
type ReadonlyPartialUser = Readonly<Partial<User>>;
// → { readonly name?: string; readonly age?: number; }

// !One important caveat — Readonly is shallow:
interface User {
  name: string;
  address: { city: string };
}

const user: Readonly<User> = { name: "John", address: { city: "Sofia" } };
user.name = "Jane"; // ❌ error
user.address = {}; // ❌ error
user.address.city = "Varna"; // ✅ works! nested objects are NOT readonly

//*/

/*/
// STRING LITERAL UTILITY TYPES
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

type City = "New York" | "London" | "tokyo";
type UppercaseCity = Uppercase<City>;
type LowercaseCity = Lowercase<City>;
type CapitalizeCity = Capitalize<City>;
type UncapitalizeCity = Uncapitalize<City>;
//*/

//*/
// Satisfies operator - check that this matches the type, but don't forget what each property actually is.
type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [225, 255, 0],
} satisfies Record<Properties, RGB | string>;

const redComp = color.red[0];
const greenVal = color.green.toUpperCase();
//*/
