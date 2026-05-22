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
// Object as an Enum
let oDirection = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
};
let direction3 = oDirection.UP;
// Computed Enums
var AccessPermission;
(function (AccessPermission) {
    AccessPermission[AccessPermission["None"] = 0] = "None";
    AccessPermission[AccessPermission["Read"] = 1] = "Read";
    AccessPermission[AccessPermission["Write"] = 2] = "Write";
    AccessPermission[AccessPermission["ReadWrite"] = 3] = "ReadWrite";
    AccessPermission[AccessPermission["Delete"] = 4] = "Delete";
    AccessPermission[AccessPermission["All"] = 7] = "All";
    //All = ReadWrite | Delete,
})(AccessPermission || (AccessPermission = {}));
console.log(AccessPermission.ReadWrite);
console.log(AccessPermission.All);
// EXERCISE
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
    Status["Cancelled"] = "CANCELLED";
})(Status || (Status = {}));
let today = Day.Friday;
let currentStatus = Status.InProgress;
//# sourceMappingURL=index.js.map