// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["abc", "ddd"];

//* 2. Create a tuple person that holds a string (name) and a number (age).
type Person = [string, number];
let person: Person = ["Name", 23];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y).
// Attempt to modify their elements and observe the TypeScript error.
type Colors = readonly string[];
let colors: Colors = ["red", "orange", "blue"];

type Point = readonly [number, number];
let point: Point = [5, 12];

// colors[0] = "purple"; error
// point.push(9) error
// point[0] += 6 error

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum StatusEnum {
  Active = 0,
  Inactive,
  Pending,
}

//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
  Active: 0,
  Inactive: 1,
  Pending: 2,
} as const;
