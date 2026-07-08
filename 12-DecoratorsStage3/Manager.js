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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// ADDING A FIELD ON A PROTOTYPE
//*
let Manager = (() => {
    let _classDecorators = [withEmploymentDateOnPrototype];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Manager = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Manager = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        task = "Simple task";
        project = "Simple project";
        constructor() {
            console.log("Initializing the manager class");
        }
    };
    return Manager = _classThis;
})();
function withEmploymentDateOnPrototype(value, context) {
    value.prototype.employmentDateOnPrototype = new Date().toString();
}
const manager = new Manager();
console.log(manager);
export {};
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
/*
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
// METHOD DECORATORS
/*
class Manager {
  @watchChange
  accessor project: string = "Simple project";
}

function watchChange<T, V>(
  accessor: {
    get: (this: T) => V;
    set: (this: T, v: V) => void;
  },
  context: ClassAccessorDecoratorContext<T, V>,
) {
  return {
    get: function (this: T) {
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      console.log(`Setting ${context.name.toString()} to ${value}.`);
      accessor.set.call(this, value);
    },
  };
}

const manager = new Manager();
manager.project = "First value";
manager.project = "Second value";
// */
//# sourceMappingURL=Manager.js.map