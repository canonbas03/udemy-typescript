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

let wrongUser: User = {
name: "myname",
email: "iiii",
// bhhh: "ytff"
}

type User = {
    name: string,
    email: string
}

function fetchUser():User{
    return userPlus;
}

const fetchedUser = fetchUser();
fetchedUser.email;

// Final quiz
let city = "New York"; // string
let population = 8400000; // number
const age = 32; // number
let oldAge = 79 as const; // number
let newAge = oldAge; // number
let data = new Map(); //map
let score = [90, 86, 100]; // tuple
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
// score.push("New Score"); // yes
// let customAge: CustomAge = 50; // no
// let primitive: Primitive = new Date(); // no
// let years: CheckScore = []; // false