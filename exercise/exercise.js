"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We have a variable of type unknown with a value of Hello
let unknownValue = "Hello";
// Explicit casting
console.log(unknownValue.length); // 5
console.log(unknownValue.length); // 5
console.log(unknownValue); // Hello
console.log(typeof unknownValue); // string
// Implicit casting
// variant 1
if (typeof unknownValue == "string") {
    console.log(unknownValue.length);
}
else {
    console.log(typeof unknownValue);
}
//# sourceMappingURL=exercise.js.map