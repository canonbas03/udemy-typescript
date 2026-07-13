//*/
// GENERIC INTERFACES
interface Box<Type> {
  content: Type;
  size: number;
}

const stringBox: Box<string> = {
  content: "String, hello",
  size: 3,
};

const numberBox: Box<number> = {
  content: 12,
  size: 4,
};

const boxBox: Box<typeof numberBox> = {
  content: numberBox,
  size: 0,
};

interface hasLength {
  length: number;
}
function logLength<T extends hasLength>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");
logLength({ length: 12 });
//*/
