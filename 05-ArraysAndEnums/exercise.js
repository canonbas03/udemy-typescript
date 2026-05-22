"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers = [1, 2, 3];
let strings = ["abc", "ddd"];
let person = ["Name", 23];
let colors = ["red", "orange", "blue"];
let point = [5, 12];
// colors[0] = "purple"; error
// point.push(9) error
// point[0] += 6 error
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["Active"] = 0] = "Active";
    StatusEnum[StatusEnum["Inactive"] = 1] = "Inactive";
    StatusEnum[StatusEnum["Pending"] = 2] = "Pending";
})(StatusEnum || (StatusEnum = {}));
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: 0,
    Inactive: 1,
    Pending: 2,
};
//# sourceMappingURL=exercise.js.map