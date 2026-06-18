class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the manager class");
  }
}

// Calling the constructor
console.log("// Calling the constructor");
new Manager();

const manager = new Manager();

console.log("// Manager logged:");
console.log(manager);
