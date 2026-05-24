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
