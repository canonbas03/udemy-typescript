"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function returnParams(param) {
    return param;
}
const return1 = returnParams("abc");
const return2 = returnParams(123);
const myParam = (param) => param;
const myParam2 = function (param1, param2) {
    return param1;
};
const myParam3 = function (par) {
    return par;
};
const getFirstElement = (array) => {
    return array[0];
};
const numArr = [3, 2, 1];
const strArr = ["c", "b", "a"];
console.log(getFirstElement(numArr));
console.log(getFirstElement(strArr));
const firstElement = (array) => {
    return array[0];
};
function logLength(arr) {
    console.log(arr.length);
}
logLength(numArr);
logLength(strArr);
logLength("any string");
const stringNumberPair = {
    key: "myKeyString",
    value: 123,
};
const numberStringPair = {
    key: 234,
    value: ["string value", "abc"],
};
// The printId func can only be invoked with an argument of type T, T must have id prop
function printId(obj) {
    console.log(`ID: ${obj.id}`);
}
const person = {
    id: 12,
    name: "Blue",
};
printId(person);
const noIdobj = {
    name: "product",
};
// printId(noIdobj) error
//# sourceMappingURL=index.js.map