type GreetFunction = (name?: string) => string;
const greet: GreetFunction = (name = "Guest") => {
  return `Hello, ${name}`;
};

function greet2(name = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("John"));

console.log(greet2());
console.log(greet2("John"));

type AreaFunction = (width: number, height?: number) => number;

const calculateArea: AreaFunction = (width, height = 10) => {
  return width * height;
};
console.log(calculateArea(5));
console.log(calculateArea(5, 2));
