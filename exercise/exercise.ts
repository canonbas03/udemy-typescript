// We have a variable of type unknown with a value of Hello
let unknownValue: unknown = "Hello";

// Explicit casting
console.log((unknownValue as string).length) // 5
console.log((<string>unknownValue).length) // 5
console.log(unknownValue); // Hello
console.log(typeof unknownValue); // string

// Implicit casting
// variant 1
if(typeof unknownValue == "string"){
    console.log(unknownValue.length) 
}else{
    console.log(typeof unknownValue)
}