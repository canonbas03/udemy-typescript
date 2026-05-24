// --- DECLARATION ---
// Named function
function intro(name: string, age: number): string {
  return `${name} is ${age} years old`;
}

// Function expression
const intro2 = function (name: string, age: number): string {
  return `${name} is ${age} years old`;
};

// Arrow function
const intro3 = (name: string, age: number): string | number => {
  return 5;
};

// --- DEFAULT AND OPTIONAL PARAMETERS ---
function intro4(name: string, age: number, gender?: string): string {
  if (gender) {
    return `${name} is a ${gender}, ${age} years old.`;
  }
  return `${name} is ${age} years old.`;
}

console.log(intro4("John", 18, "male"));

// Exercise with optional parameter of type Enum
enum Gender {
  Male = "male",
  Female = "female",
  Other = "undefined",
}

function intro5(name: string, age: number, gender?: Gender) {
  return intro4(name, age, gender);
}
console.log(intro5("Jack", 42, Gender.Male));

// --- CUSTOM PARAMETERS AND RETURN TYPES ---
enum AgeUnit {
  Years = "years",
  Months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
};

const person: Person = {
  name: "Josh",
  age: 20,
  ageUnit: AgeUnit.Years,
};

// Pure function
console.log("           === PURE ===");
function convertAgeToMonthsPure(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    return {
      ...person,
      age: person.age * 12,
      ageUnit: AgeUnit.Months,
    };
  }
  return person;
}
const person3 = person;
console.log(person);
console.log(convertAgeToMonthsPure(person3));
console.log(person);

// NOTICE: Whe using spread operator (...person), we are spreading all the props it has, and we just override by redeclaring whatever needs to be changed.

console.log("           === UNPURE ===");
function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}
const person2 = person;
console.log(person);
console.log(convertAgeToMonths(person2));
console.log(person);

// --- FUNCTION CALL SIGNATURES ---
type GreetingFunction = (greeting: string) => string;
type Person2 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  //greet: Function;
  //greet: = (greeting: string) => string;
  greet: GreetingFunction;
};

const person4: Person2 = {
  name: "Josh",
  age: 20,
  ageUnit: AgeUnit.Years,
  greet: (greeting) => {
    return `${greeting}, ${person4.name}!`;
  },
};
console.log(person4.greet("Hiii"));

// --- Anonymous Functions ---
const students: string[] = ["Alice", "Bob", "Claudia"];
students.map((student) => {
  console.log(student);
});

students.map(function (student) {
  console.log(student);
});

// Exercise
type LogMessage = (log: string) => void;
const log: LogMessage = (log) => {
  console.log(log);
};
log("Hello TypeScript");

type ThrowError = (error: string) => never;
const throwError: ThrowError = (error) => {
  throw new Error(error);
};
//throwError("TEST ERROR");

function processData(data: string): void {
  log(`Processing ${data}`);
}
processData("sample data");

function errorHandlingScenario(): never {
  throwError("An unexpected error occurred!");
}
errorHandlingScenario();

// Async functions
async function fetchFromDB(id: number): Promise<any> {}

const anotherAsync = async (): Promise<any> => {};

async function returnString(id: number): Promise<string> {
  return Promise.resolve("Result string");
}

type User = {
  name: string;
  age: number;
};

async function returnUser(id: number): Promise<User> {
  return Promise.resolve({ name: "Josh", age: 25 });
}
