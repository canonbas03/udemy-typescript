// --- DECLARATION ---
// Named function
function intro(name, age) {
    return `${name} is ${age} years old`;
}
// Function expression
const intro2 = function (name, age) {
    return `${name} is ${age} years old`;
};
// Arrow function
const intro3 = (name, age) => {
    return 5;
};
console.log("INTRO2:", intro2("John", 65));
// --- DEFAULT AND OPTIONAL PARAMETERS ---
function intro4(params) {
    if (params.gender) {
        return `${params.fName} is a ${params.gender}, ${params.age} years old.`;
    }
    return `${params.fName} is ${params.age} years old.`;
}
console.log(intro4({ age: 12 }));
// Exercise with optional parameter of type Enum
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "undefined";
})(Gender || (Gender = {}));
function intro5(name, age, gender) {
    //return intro4(name, age, gender);
}
console.log(intro5("Jack", 42, Gender.Male));
// --- CUSTOM PARAMETERS AND RETURN TYPES ---
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person = {
    name: "Josh",
    age: 20,
    ageUnit: AgeUnit.Years,
};
// Pure function
console.log("           === PURE ===");
function convertAgeToMonthsPure(person) {
    if (person.ageUnit === AgeUnit.Years) {
        return {
            ...person,
            age: person.age * 12,
            ageUnit: AgeUnit.Months,
        };
    }
    return person;
}
const person3 = person;
console.log(person);
console.log(convertAgeToMonthsPure(person3));
console.log(person);
// NOTICE: Whe using spread operator (...person), we are spreading all the props it has, and we just override by redeclaring whatever needs to be changed.
console.log("           === UNPURE ===");
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    //return person;
}
const person2 = person;
console.log(person);
console.log(convertAgeToMonths(person2));
console.log(person);
convertAgeToMonths(person);
const person4 = {
    name: "Josh",
    age: 20,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting}, ${person4.name}!`;
    },
};
console.log(person4.greet("Hiii"));
// --- ANONYMOUS FUNCTIONS ---
const students = ["Alice", "Bob", "Claudia"];
students.map((student) => {
    console.log(student);
});
students.map(function (student) {
    console.log(student);
});
const log = (log) => {
    console.log(log);
};
log("Hello TypeScript");
const throwError = (error) => {
    throw new Error(error);
};
//throwError("TEST ERROR");
function processData(data) {
    log(`Processing ${data}`);
}
processData("sample data");
function errorHandlingScenario() {
    throwError("An unexpected error occurred!");
}
//errorHandlingScenario();
// --- ASYNC FUNCTIONS ---
async function fetchFromDB(id) { }
async function OneSecondLog() {
    await setTimeout(() => {
        console.log("1000 MS PASSED");
    }, 5000);
}
async function logProgress() {
    console.log("FUNCTION START");
    await OneSecondLog();
    console.log("FUNCTION END FUNCTION");
}
logProgress();
const anotherAsync = async () => { };
async function returnString(id) {
    return Promise.resolve("Result string");
}
async function returnUser(id) {
    return Promise.resolve({ name: "Josh", age: 25 });
}
// --- REST PARAMS AND ARGUMENTS ---
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => by * number);
}
console.log(multiplyBy(5, 1, 2, 3));
const args = [5, 8];
// const angle = Math.atan2(...args); error
const args1 = [5, 8];
const angle1 = Math.atan2(...args1);
const args2 = [5, 8];
const angle2 = Math.atan2(...args2);
let numbers = {
    a: 1,
    b: 2,
    c: 3,
};
function sumNums(numbers) {
    return numbers.a + numbers.b + numbers.c;
}
function sumNumsDestructed({ a, b, c }) {
    return a + b + c;
}
console.log(sumNumsDestructed(numbers));
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    throw new Error("Invalid ticket details!");
};
// {dep: Date, } = reserve()
console.log(reserve(new Date(), new Date(), "Sofia", "Wroclaw"));
console.log(reserve(new Date(), "Sofia", "Wroclaw"));
function returnObjectDimenstions() {
    return { width: 4, depth: 3, height: 2 };
}
const dimensions = returnObjectDimenstions();
console.log(dimensions.height);
const { height, width, depth } = returnObjectDimenstions();
console.log(height);
export {};
//# sourceMappingURL=index.js.map