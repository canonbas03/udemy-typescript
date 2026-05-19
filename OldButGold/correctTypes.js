"use strict";
// /**
//  * Assign the correct types to each of the following variables
//  */
// let message: string = "Hello, TypeScript!";
// let age: number = 42;
// let isStudent:boolean = true;
// let fetched:null = null;
// let user:undefined = undefined;
// let largeNumber:bigint = 9007199254740991n;
// let unique:symbol = Symbol("uniqueSymbol");
Object.defineProperty(exports, "__esModule", { value: true });
// let number2 : number;
// console.log(number2);
// function myFunction (user: undefined){
//     return user;
// }
// function plus(a:number|undefined){
//     if(a!=undefined)
//     return a+a;
// }
// console.log(plus(number2));
// console.log(myFunction(user + 1));
let myBoolean = false;
let maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe);
let maxSafe2 = Number.MAX_SAFE_INTEGER + 5;
console.log(maxSafe2);
console.log(maxSafe * maxSafe2);
let bigInt = BigInt(1666666666666666666666666);
console.log(bigInt);
let mySimbol = Symbol("asd");
console.log(mySimbol.description);
let user = {
    [mySimbol]: "test",
    nameoOf: "Pesho",
    getSymbol() {
        return mySimbol.description;
    },
    setSymbol(a) {
        this[mySimbol] = a;
    }
};
user.setSymbol("newValue");
console.log(user.getSymbol());
let myNuber = -1.2;
//# sourceMappingURL=correctTypes.js.map