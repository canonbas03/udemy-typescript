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
