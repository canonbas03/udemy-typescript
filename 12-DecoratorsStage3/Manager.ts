// Class decorator
@PrintDecoratorData
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  // constructor() {
  //   console.log("Initializing the manager class");
  // }
}

function PrintDecoratorData(value: Function, context: ClassDecoratorContext) {
  console.log("Value: ");
  console.log(value);

  console.log("classDecoratorContext:");
  console.log(context);
}

// Calling the constructor
console.log("// Calling the constructor");
new Manager();

const manager = new Manager();

console.log("// Manager logged:");
console.log(manager);

console.log("Printing");
manager;
