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
/*
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

// FIELD DECORATORS
/*
type Task = {
  name: string;
  level: "low" | "medium" | "high";
};

class Manager {
  @withComplicatedTask
  tasks: Task[] = [];
}

function withComplicatedTask<T, V extends Task[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>,
) {
  return function (args: V) {
    args.push({
      name: "added task 1",
      level: "high",
    });
    args.push({
      name: "added task 2",
      level: "low",
    });

    return args;
  };
}
const manager = new Manager();
console.log(manager);
// */

// DECORATOR FACTORIES
/*
type Task = {
  name: string;
  level: "low" | "medium" | "high";
};

class Manager {
  @withTask({ name: "added task 1", level: "low" })
  tasks: Task[] = [];

  @withComplicatedTask()
  extraTasks: Task[] = [];
}

function withTask(task: Task) {
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext<T, V>,
  ) {
    return function (args: V) {
      args.push(task);

      return args;
    };
  };
}

function withComplicatedTask() {
  return withTask({
    name: "complicated task",
    level: "medium",
  });
}
const manager = new Manager();
console.log(manager);
// */

// METHOD DECORATORS
//*
class Project {
  budget: number = 900;

  @withBudget(10)
  writeTests() {
    console.log("Write Test method is called.");
  }

  @withBudget(500)
  fixBugInProduction() {
    console.log("fixBugInProduction method is called.");
  }
}

function withBudget(requiredBudget: number) {
  return function <T extends { budget: number }>(
    target: Function,
    context: ClassMethodDecoratorContext<T>,
  ) {
    return function (this: T, ...args: any) {
      const instance = this as T;
      if (instance.budget >= requiredBudget) {
        instance.budget -= requiredBudget;
        target.apply(instance, args);
      } else {
        console.error(
          `Not enough budget to perform the action: ${context.name.toString()}. Budget: ${instance.budget}, required: ${requiredBudget}`,
        );
      }
    };
  };
}

const project = new Project();
project.writeTests();
project.fixBugInProduction();
project.fixBugInProduction();
// */
