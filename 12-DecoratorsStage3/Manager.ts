// CLASS DECORATOR
/*
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

// ADDING A FIELD ON A PROTOTYPE
/*
@withEmploymentDateOnPrototype
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

function withEmploymentDateOnPrototype(
  value: Function,
  context: ClassDecoratorContext,
) {
  value.prototype.employmentDateOnPrototype = new Date().toString();
}
// */

// ADDING A FIELD INSIDE THE OBJECT DEFFINITION
//*
@withEmploymentDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

function withEmploymentDate<T extends { new (...args: any[]): {} }>(
  baseClass: T,
) {
  console.log("Invoking decorator:");

  return class extends baseClass {
    eploymentDate: string = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);

      console.log(`Adding employment date to ${baseClass.name}`);
    }
  };
}

const manager = new Manager();
console.log(manager);
// */
