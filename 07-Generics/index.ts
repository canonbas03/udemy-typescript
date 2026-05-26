function returnParams<Type>(param: Type): Type {
  return param;
}

const return1 = returnParams<string>("abc");
const return2 = returnParams<number>(123);

const myParam: <T>(param: T) => T = (param) => param;

const myParam2 = function <T, U>(param1: T, param2: U): T | U {
  return param1;
};

type ObjectType = {
  myParam: <T>(param: T) => T;
};

type MyParam = <T>(param: T) => T;
const myParam3: MyParam = function <U>(par: U) {
  return par;
};

// --- GENERIC FUNCTION DECLARATIONS ---
// <T> after =, whatever generic is passed will be used
type GetFirstElement = <T>(array: T[]) => T | undefined;

const getFirstElement: GetFirstElement = (array) => {
  return array[0];
};

const numArr = [3, 2, 1];
const strArr = ["c", "b", "a"];

console.log(getFirstElement(numArr));
console.log(getFirstElement<string>(strArr));

// <T> before =, we need to implement new functions for each type (string, number, etc.)
type FirstElement<T> = (array: T[]) => T | undefined;

const firstElement: FirstElement<string> = (array) => {
  return array[0];
};

// --- GENERICS AND CONSTRAINTS WITH ARRAYS
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(arr: T): void {
  console.log(arr.length);
}

logLength(numArr);
logLength(strArr);
logLength("any string");

// ---
type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

const stringNumberPair: KeyValuePair<string, number> = {
  key: "myKeyString",
  value: 123,
};

const numberStringPair: KeyValuePair<number, string[]> = {
  key: 234,
  value: ["string value", "abc"],
};

type HasId = {
  id: number;
};

// The printId func can only be invoked with an argument of type T, T must have id prop
function printId<T extends HasId>(obj: T) {
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
// printId(noIdobj) error
