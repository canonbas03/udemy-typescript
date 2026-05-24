type GreetFunction = (name?: string) => string;
const greet: GreetFunction = (name = "Guest") => {
  return `Hello, ${name}`;
};

function greet2(name = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("John"));

console.log(greet2());
console.log(greet2("John"));

type AreaFunction = (width: number, height?: number) => number;
const calculateArea: AreaFunction = (width, height = 10) => {
  return width * height;
};
console.log(calculateArea(5));
console.log(calculateArea(5, 2));

type StatusFunction = (isActive?: boolean) => string;
const checkStatus: StatusFunction = (isActive = true) => {
  if (isActive) {
    return "Active";
  }
  return "Inactive";
};

console.log(checkStatus());
console.log(checkStatus(false));

// Async Functions Exercise
type FetchDataFunction = (
  url: string,
  ...params: string[]
) => Promise<string[]>;

const fetchData: FetchDataFunction = async (url, ...params) => {
  const fullURL = `${url}?${params.join("&")}`;
  try {
    let res = await fetch(fullURL);
    // let data = await res.json();
    // console.log(data);
  } catch (error) {}
  let mockFetch = ["data1", "data2"];
  return mockFetch;
};

fetchData("https://api.example.com", "param1=value1", "param2=value2").then(
  (data) => console.log(data),
);

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

async function getUserInfo({
  firstName,
  lastName,
  age,
}: User): Promise<string> {
  return `User: ${firstName} ${lastName}, Age: ${age}`;
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

getUserInfo(user).then((result) => console.log(result));

/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.
