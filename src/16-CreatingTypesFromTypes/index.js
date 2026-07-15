/*/
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
// "top-left" | "top-right" | "bottom-left" | "bottom-right"
const message1 = "status-success"; // Allowed
const message2 = "status-error"; //  Allowed
// const message3: StatusMessage = "status-failed"; //  Error: "failed" is not a valid Status
//! Using Template Literals with Generics
function createApiEndpoint(route) {
    return `api/${route}`;
}
const userEndpoint = createApiEndpoint("users"); // "api/users"
const orderEndpoint = createApiEndpoint("orders"); // "api/orders"
const color1 = "rgb(255, 0, 0)"; //  Allowed
export {};
// const color2: RGB = "rgba(255, 0, 0, 0.5)"; // Error: Incorrect format
//*/
//# sourceMappingURL=index.js.map