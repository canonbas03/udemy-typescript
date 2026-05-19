type CustomType = string;

let name: CustomType = "Dzhan234";

console.log(name);

// union types
type StringOrNum = string | number;

let myVar: StringOrNum = 123;
myVar = 'Hello';

// type check
type check1 = any extends unknown ? true : false;
type check2 = unknown extends any ? true : false;

type myTuple = [12, 'hello'];
type check3 = object extends myTuple ? true : false;
type check4 = myTuple extends object ? true : false;

//  Type Casting
// API
let user = {
    name: "Dzhan",
    email: "dyonbash@email.com"
}

type User = {
    name: string,
    email: string
}

function fetchUser(){
    return user as User; 
}

const fetchedUser = fetchUser();