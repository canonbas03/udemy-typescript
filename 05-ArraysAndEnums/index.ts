// --- STRICTLY TYPING ARRAYS ---
let a: number[] = [1, 2, 3];
let b: Array<string> = ["abc", "bcd", "bbb"];
let c: (string | number | boolean)[] = ["hello", 543, true];

// --- TUPLES ---
let person: [string, string, number] = ["Ruja", "Ignatova", 37];

type User = [string, string, number, string?];
let user: User = ["Ivan", "Ivanov", 34, "i.ivanov@email.com"];

type Grades = 2 | 3 | 4 | 5 | "Good" | "Very Good" | "Excelent";
type Student = [number, string, ...Array<Grades>];
let student: Student = [5, "class b", 2, 3];
student.push(6);
student.push(5);
student.push("GoodS");

console.log(student);

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

let arrA: a;

arrA = ["ds"];
arrA = ["ds", "fdf"];

// const arr: a;

// arrA[0]=

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
  third = 6,
}

//const index: number = Object.keys(5).indexOf("Casual"); // 1

const index2 = Object.values(myEnum).filter((val) => val == 6); // 1

// ordinates
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

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const enum CDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

let direction1 = Direction.DOWN;
let direction2 = CDirection.DOWN;

// Object as an Enum
let oDirection = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3,
} as const;
let direction3 = oDirection.UP;

// Computed Enums
enum AccessPermission {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = Read + Write + Delete,
  //All = ReadWrite | Delete,
}
console.log(AccessPermission.ReadWrite);
console.log(AccessPermission.All);

// EXERCISE
enum Day {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Cancelled = "CANCELLED",
}

let today: Day = Day.Friday;

let currentStatus: Status = Status.InProgress;
