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

// --- ANONYMOUS FUNCTIONS ---
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
//errorHandlingScenario();

// --- ASYNC FUNCTIONS ---
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

// --- REST PARAMS AND ARGUMENTS ---
function multiplyBy(by: number, ...numbers: number[]) {
  return numbers.map((number) => by * number);
}
console.log(multiplyBy(5, 1, 2, 3));

const args = [5, 8];
// const angle = Math.atan2(...args); error

const args1 = [5, 8] as const;
const angle1 = Math.atan2(...args1);

const args2: [number, number] = [5, 8];
const angle2 = Math.atan2(...args2);

// --- PARAMETER DESTRUCTURING ---
type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbers: Numbers = {
  a: 1,
  b: 2,
  c: 3,
};

function sumNums(numbers: Numbers) {
  return numbers.a + numbers.b + numbers.c;
}

function sumNumsDestructed({ a, b, c }: Numbers) {
  return a + b + c;
}
console.log(sumNumsDestructed(numbers));

// --- FUNCTION OVERLOADING ---
type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (
    departureDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string,
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error("Invalid ticket details!");
};

console.log(reserve(new Date(), new Date(), "Sofia", "Wroclaw"));
console.log(reserve(new Date(), "Sofia", "Wroclaw"));
