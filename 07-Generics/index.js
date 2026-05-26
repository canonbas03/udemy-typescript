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
//# sourceMappingURL=index.js.map