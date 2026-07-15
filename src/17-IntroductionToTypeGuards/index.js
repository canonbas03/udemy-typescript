// INTRODUCTION TO TYPE GUARDS
function convertNumberToString(number) {
    if (typeof number !== "number") {
        console.log("Input a valid number");
        return;
    }
    return number.toString();
}
// TYPEOF TYPE GUARDS
const user = {
    name: "John",
    age: 30,
};
let tom;
function printStrings(strs) {
    if (!strs) {
        return "Please pass in valid string or arrays of strings";
    }
    if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else {
        console.log(strs);
    }
}
function printAge(person) {
    if (person.age) {
        console.log(person.age);
    }
    else {
        console.log("Age Unknown");
    }
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
function getArea1(shape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.sideLength ** 2;
    }
}
// INSTANCE OF TYPE GUARDS
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Electronics extends Product {
    warranty;
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }
    getPrice() {
        return this.price;
    }
}
class Clothing extends Product {
    size;
    material;
    constructor(name, price, size, material) {
        super(name, price);
        this.size = size;
        this.material = material;
    }
    getPrice() {
        return this.price;
    }
}
function displayDetails(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Name: ${product.getPrice()}`);
    if (product instanceof Electronics) {
        console.log(`Warranty: ${product.warranty}`);
    }
    else if (product instanceof Clothing) {
        console.log(`Size: ${product.size}`);
        console.log(`Material: ${product.material}`);
    }
}
export {};
//# sourceMappingURL=index.js.map