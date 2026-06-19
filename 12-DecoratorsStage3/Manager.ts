/*

// Class decorator
@PrintDecoratorData
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

function PrintDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log("Value: ");
  console.log(value);

  console.log("Class Decorator Context:");
  console.log(context);
}

// Calling the constructor
console.log("// Calling the constructor");
const manager = new Manager();

console.log("// Manager logging:");
console.log(manager);

// */

//*
// Class decorator
@withEmploymentDateOnPrototype
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

function PrintDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log("Value: ");
  console.log(value);

  console.log("Class Decorator Context:");
  console.log(context);
}

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext,
) {
  value.prototype.employmentDateOnPrototype = new Date().toString();
}

// Calling the constructor
console.log("// Calling the constructor");
const manager = new Manager();

console.log("// Manager logging:");
console.log(manager);
// */
