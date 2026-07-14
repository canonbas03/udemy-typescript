// INTRODUCTION TO TYPE GUARDS
function convertNumberToString(number: any) {
  if (typeof number !== "number") {
    console.log("Input a valid number");
    return;
  }
  return number.toString();
}

// TYPEOF TYPE GUARDS
const user = {
  name: "John",
  age: 30,
};

let tom: typeof user;

function printStrings(strs: string | string[] | null) {
  if (!strs) {
    return "Please pass in valid string or arrays of strings";
  }
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else {
    console.log(strs);
  }
}

// TRUTHINESS NARROWING
type Person = {
  name: string;
  age?: number;
};

function printAge(person: Person) {
  if (person.age) {
    console.log(person.age);
  } else {
    console.log("Age Unknown");
  }
}

// Age of 0 is falsy, so using !== undefined is better:
// if (person.age !== undefined) {
//     console.log(person.age); // 0 would now print correctly
// }

// EQUALITY NARROWING
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// IN OPERATOR NARROWING
type Circle1 = {
  kind: "circle";
  radius: number;
};

type Square1 = {
  kind: "square";
  sideLength: number;
};

type Shape1 = Circle1 | Square1;

function getArea1(shape: Shape1) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

// INSTANCE OF TYPE GUARDS
abstract class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  abstract getPrice(): number;
}

class Electronics extends Product {
  constructor(
    name: string,
    price: number,
    public warranty: number,
  ) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

class Clothing extends Product {
  constructor(
    name: string,
    price: number,
    public size: string,
    public material: string,
  ) {
    super(name, price);
  }

  getPrice(): number {
    return this.price;
  }
}

function displayDetails(product: Product): void {
  console.log(`Name: ${product.name}`);
  console.log(`Name: ${product.getPrice()}`);

  if (product instanceof Electronics) {
    console.log(`Warranty: ${product.warranty}`);
  } else if (product instanceof Clothing) {
    console.log(`Size: ${product.size}`);
    console.log(`Material: ${product.material}`);
  }
}
