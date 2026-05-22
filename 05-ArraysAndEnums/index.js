"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- STRICTLY TYPING ARRAYS ---
let a = [1, 2, 3];
let b = ["abc", "bcd", "bbb"];
let c = ["hello", 543, true];
// --- TUPLES ---
let person = ["Ruja", "Ignatova", 37];
let user = ["Ivan", "Ivanov", 34, "i.ivanov@email.com"];
let passingStudents = [5, true, "Mark", "Peter", "Patrik"];
let stringBoolsNum = ["abc", true, true, 6];
//NOTICE: Only 1 rest operator allowed per type, we cant have an optional param after a rest
// --- READ-ONLY ---
// Array
let numArray = [1, 2, 3];
let person2 = ["fName", "sName", 31];
// EXERCISE
let readOnlyNumbers = [1, 2, 3, 4, 5];
let ageNameTuple = [30, "John"];
let readOnlyTuple = [25, "Jane"];
// --- ENUMS ---
//# sourceMappingURL=index.js.map