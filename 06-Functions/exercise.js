"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name = "Guest") => {
    return `Hello, ${name}`;
};
function greet2(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("John"));
console.log(greet2());
console.log(greet2("John"));
const calculateArea = (width, height = 10) => {
    return width * height;
};
console.log(calculateArea(5));
console.log(calculateArea(5, 2));
//# sourceMappingURL=exercise.js.map