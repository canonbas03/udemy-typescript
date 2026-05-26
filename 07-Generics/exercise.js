"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = (array, predicate) => {
    let result = [];
    for (let el of array) {
        result.push(predicate(el));
    }
    return result;
};
const numArr = [1, 2, 3, 4, 5];
const plusTen = map(numArr, (el) => el + 10);
console.log(plusTen);
//# sourceMappingURL=exercise.js.map