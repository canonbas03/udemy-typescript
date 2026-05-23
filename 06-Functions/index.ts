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
