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
var myEnum;
(function (myEnum) {
    myEnum[myEnum["first"] = 5] = "first";
    myEnum[myEnum["second"] = 6] = "second";
    myEnum[myEnum["third"] = 7] = "third";
})(myEnum || (myEnum = {}));
console.log(myEnum.first); // 5
console.log(myEnum.second); // 6
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["AUTHOR"] = "author";
    Role["EDITOR"] = "editor";
})(Role || (Role = {}));
let person3 = {
    name: "John",
    email: "john@email.com",
    role: Role.ADMIN,
};
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
let direction1 = Direction.DOWN;
let direction2 = 1 /* CDirection.DOWN */;
let oDirection = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
};
let direction3 = oDirection.UP;
//# sourceMappingURL=index.js.map