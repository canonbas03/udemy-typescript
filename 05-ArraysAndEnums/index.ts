// --- STRICTLY TYPING ARRAYS ---
let a: number[] = [1, 2, 3];
let b: Array<string> = ["abc", "bcd", "bbb"];
let c: (string | number | boolean)[] = ["hello", 543, true];

// --- TUPLES ---
let person: [string, string, number] = ["Ruja", "Ignatova", 37];

type User = [string, string, number, string?];
let user: User = ["Ivan", "Ivanov", 34, "i.ivanov@email.com"];

// rest operator
type PassingStudents = [number, boolean, ...string[]];
let passingStudents: PassingStudents = [5, true, "Mark", "Peter", "Patrik"];

type StringBoolsNumber = [string, ...boolean[], number];
let stringBoolsNum: StringBoolsNumber = ["abc", true, true, 6];
//NOTICE: Only 1 rest operator allowed per type, we cant have an optional param after a rest

// --- READ-ONLY ---
// Array
let numArray: readonly number[] = [1, 2, 3];
// numArray.push(5); error

type a = Readonly<string[]>;
type b = Readonly<(string | number)[]>;

type c = ReadonlyArray<string>;
type d = ReadonlyArray<string | number>;

// tuple
type readonlyTuple = readonly [string, string, number];
let person2: readonlyTuple = ["fName", "sName", 31];
// person2[0] = "newNames"; // error

type e = Readonly<[string, number, string]>;

// EXERCISE
let readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

type NumberStringTuple = [number, string];
let ageNameTuple: NumberStringTuple = [30, "John"];

let readOnlyTuple: Readonly<NumberStringTuple> = [25, "Jane"];

// --- ENUMS ---
enum myEnum {
  first = 5,
  second,
  third,
}
console.log(myEnum.first); // 5
console.log(myEnum.second); // 6

enum Role {
  ADMIN = "admin",
  AUTHOR = "author",
  EDITOR = "editor",
}

type Person = {
  name: string;
  email: string;
  role: Role;
};
let person3: Person = {
  name: "John",
  email: "john@email.com",
  role: Role.ADMIN,
};
