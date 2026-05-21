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
