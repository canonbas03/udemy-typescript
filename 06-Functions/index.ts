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
