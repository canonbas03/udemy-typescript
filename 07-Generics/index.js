function returnParams(param) {
    return param;
}
const return1 = returnParams("abc");
const return2 = returnParams(123);
const myParam = (param) => param;
const myParam2 = function (param1, param2) {
    return param1;
};
const myParam3 = function (par) {
    return par;
};
const getFirstElement = (array) => {
    return array[0];
};
const numArr = [3, 2, 1];
const strArr = ["c", "b", "a"];
console.log(getFirstElement(numArr));
console.log(getFirstElement(strArr));
const firstElement = (array) => {
    return array[0];
};
function logLength(arr) {
    console.log(arr.length);
}
logLength(numArr);
logLength(strArr);
logLength("any string");
const stringNumberPair = {
    key: "myKeyString",
    value: 123,
};
const numberStringPair = {
    key: 234,
    value: ["string value", "abc"],
};
// The printId func can only be invoked with an argument of type T, T must have id prop
function printId(obj) {
    console.log(`ID: ${obj.id}`);
}
const person = {
    id: 12,
    name: "Blue",
};
printId(person);
const noIdobj = {
    name: "product",
};
let idOfEvent = "id";
let dateOfEvent = "date";
let stringObj = {
    0: "First prop",
    second: "Second",
    dd: "dsds",
};
console.log(stringObj[0]);
console.log(stringObj["0"]);
console.log(stringObj["second"]);
let partial = {
    name: "Hello",
};
// --- GENERIC DEFAULT VALUES ---
async function fetchData(url) {
    const response = await fetch(url);
    const data = (await response).json();
    return data;
}
async function fetchDefaults() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
fetchDefaults();
async function fetchPost() {
    const post = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post);
}
fetchPost();
// --- GENERICS ---
const filter = (array, predicate) => {
    let result = [];
    for (const el of array) {
        if (predicate(el)) {
            result.push(el);
        }
    }
    return result;
};
const numArray = [1, 2, 3, 4, 5];
console.log(filter(numArray, (el) => el > 3));
const animalArray = ["dog", "cat", "mouse"];
console.log(filter(animalArray, (animal) => animal === "cat"));
export {};
//# sourceMappingURL=index.js.map