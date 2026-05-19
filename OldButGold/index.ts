type CustomType = string;

let name: CustomType = "Dzhan234";

console.log(name);

// union types
type StringOrNum = string | number;

let myVar: StringOrNum = 123;
myVar = 'Hello';

// type checks
type check1 = any extends unknown ? true : false;
type check2 = unknown extends any ? true : false;

type myTuple = [12, 'hello'];
type check3 = object extends myTuple ? true : false;
type check4 = myTuple extends object ? true : false;

//  Type Casting
// API
let userPlus = {
    name: "Dzhan",
    email: "dyonbash@email.com",
    field: "uuuu"
}

// annotated wrongUser with type User, the shape doesnt match
let wrongUser: User = {
    name: "myname",
    email: "iiii",
    // field: "ytff"
}

// This creates a shape, those are property rules
type User = {
    name: string;
    email: string;
}

// Duck typing (structural typing)
function fetchUser(): User{
    return userPlus;
}

const fetchedUser = fetchUser();
fetchedUser.email;

const fullUser = fetchedUser as User & {field: string}
fullUser.field


// Final quiz
let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79 as const; // 79
let newAge = oldAge; // 79
let data = new Map<string, string>(); //map
let score = [90, 86, 100]; // num array
type Primitive = string | number | boolean; // union type
type CustomName = "John" extends string ? string : "John";
type CustomAge = typeof newAge extends number ? 79 : number;
type CheckData = typeof data extends Object ? true : false;
type CheckScore = typeof score extends never ? {} : [];

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; // no it is const
// score.push(10); //yes
// score.push("New Score"); // no
// let customAge: CustomAge = 50; // no
// let primitive: Primitive = new Date(); // no
// let years: CheckScore = []; // false

let oldAge1 = 79 as const; // number
const constAge = 80;

//constAge += 5;
oldAge += 5;

const ApiConfig = {
    endpoint: "https://api.example.com",
    retries: 3
} as const;