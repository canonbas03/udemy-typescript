// SIMPLE DECORATOR
function mySimpleDecorator(originalMethod: any, context: any) {
  function wrapper(...args: any[]) {
    console.log("Arguments received:", args);
    originalMethod(...args);
  }

  return wrapper;
}

class Robot {
  @mySimpleDecorator
  sayHello(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const bot = new Robot();
bot.sayHello("Alice");

// USING THIS
console.log("\n", "// USING THIS");

function mySimpleDecorator2(originalMethod: any, context: any) {
  function wrapper(this: any, ...args: any[]) {
    originalMethod.call(this, ...args);
  }
  return wrapper;
}

class Robot2 {
  model = "X-100";

  @mySimpleDecorator2
  sayModel() {
    console.log(`My model is ${this.model}`);
  }
}

const bot2 = new Robot2();
bot2.sayModel();

// --- REPLACEMENT FUNCTION ---
console.log("\n");

function methodLogger(originalMethod: any, _context: any) {
  console.log("Decorator Invoked");
  //! The replacement function replaces the original method and when the original method is invoken then the replacement method is invoked instead of the original greet method.
  function replacementMethod(this: any, ...args: any[]) {
    console.log(args);
    console.log(this);
    console.log("Invocation Started");
    // The call() method of Function instances calls this function with a given this value and arguments provided individually.
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

class Person {
  constructor(public name: string) {}

  @methodLogger
  greet(greeting: string) {
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user: Person = new Person("John");
user.greet("Hello");

// --- ADD INITIALIZER TO GREET ---
function methodLogger2(originalMethod: any, context: any) {
  //! STEP 2.1, CREATE VARIABLE FOR METHOD NAME
  const methodName = context.name;

  //! STEP 2.3: Add CONDITION FOR INITIALIZER
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`,
    );
  }

  //! STEP 2.2: ADD INITIALIZER
  // Runs inside the constructor of Person when an instance is created.
  // Binds the method to the instance (this), ensuring correct context.
  // Equivalent to manually binding inside the constructor:
  // typescript

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });

  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

class Person2 {
  constructor(public name: string) {
    //! STEP 3: THIS IS HOW YOU WOULD HAVE DONE IT IN JAVASCRIPT CONSTRUCTOR
    // this.greet = this.greet.bind(this);
  }

  @methodLogger2
  greet(greeting: string) {
    //! PART OF STEP 1
    //* Console dir is a method that displays a list of the properties of the specified JavaScript object
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user2: Person2 = new Person2("John");
user.greet("Hello");
//! STEP 1: SEE THE PROBLEM
//! There will be a problem if greet is called as a standalone function
//! Reassigning greet to a separate variable to showcase the problem with the this keyword. You will see that this keword points to the Person class
const greet = user2.greet;
greet("Morning");

// --- BOUND ---
function methodLogger3(originalMethod: any, _context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("Invocation Started");
    const result = originalMethod.call(this, ...args);
    console.log("Invocation ended");
    return result;
  }
  return replacementMethod;
}

function bound(_originalMethod: any, context: any) {
  const methodName = context.name;

  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`,
    );
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person3 {
  constructor(public name: string) {}

  @bound
  @methodLogger3
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user3: Person3 = new Person3("John");
user3.greet("Hello");

const greet3 = user3.greet;
greet3("Morning");

// --- STRICT TYPING DECORATORS ---
//! STEP 2: Or second alternative could be that we use Generics, which makes the decorator strictly typed but increases the complexity of the code.
function methodLogger4<This, Args extends any[], Return>(logPrefix: string) {
  return function (
    originalMethod: (this: This, ...args: Args) => Return,
    _context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >,
  ) {
    return function (this: This, ...args: Args): Return {
      console.log(`${logPrefix}: Invocation Started`);
      const result = originalMethod.call(this, ...args);
      console.log(`${logPrefix}: Invocation ended`);
      return result;
    };
  };
}

//! STEP 1: We can use simple Type declaration of Function, here this will remain as ANY
function bound4(
  _originalMethod: Function,
  context: ClassMethodDecoratorContext,
) {
  const methodName = String(context.name);

  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`,
    );
  }

  context.addInitializer(function (this: any) {
    this[methodName] = this[methodName].bind(this);
  });
}

class Person4 {
  constructor(public name: string) {}

  @bound
  @methodLogger4("LOG")
  greet(greeting: string) {
    console.dir(this);
    console.log(` ${greeting}, ${this.name}`);
  }
}

let user4: Person4 = new Person4("John");
user.greet("Hello");

const greet4 = user.greet;
greet("Morning");

// --- FIELD DECORATORS ---
//! You could use Value extends [] for liberal typing
function addDefaultPost<This, Value extends Post[]>(
  _target: undefined,
  _context: ClassFieldDecoratorContext<This, Value>,
) {
  return function (initialValue: Value) {
    initialValue.push({
      title: "Defualt Title",
      content: "Default Content",
    });
    return initialValue;
  };
}

type Post = {
  title: string;
  content: string;
};

class Author2 {
  @addDefaultPost
  public posts: Post[] = [];

  constructor(public name: string) {}

  greet(greeting: string) {
    console.log(` ${greeting}, ${this.name}`);
  }
}

const author2 = new Author2("Mark");
console.log(author2.posts);

// --- CLASS DECORATORS ---
//! GENRIC CONSTRUCTOR TYPE TO BE USED FIRST IF NEED TO EXTEND ANY CLASS
// { new (...args: any[]): {} }

function addGreetMethod<T extends new (...args: any[]) => Greetable>(
  baseClass: T,
  _context: ClassDecoratorContext<T>,
) {
  return class extends baseClass {
    constructor(...args: any[]) {
      super(...args);
      this.greet = (greeting: string) => {
        console.log(` ${greeting}, ${this.name}! Have a great day`);
      };
    }
  };
}

//! Interface needs to be addded in the end to solve the proble of TypeScript now able to identify the greet method
interface Greetable {
  name: string;
  greet?: (greeting: string) => void;
}

//! We will get an error without proper Generics in place
@addGreetMethod
class Author implements Greetable {
  constructor(public name: string) {}
}

const author = new Author("Mark");
console.log(author);

// --- DECORATORS FOR ACCESSORS AND MUTATORS ---
function getter(getter: any, context: ClassGetterDecoratorContext) {
  console.log(getter);
  console.log(context);
}

function setter(setter: any, context: ClassSetterDecoratorContext) {
  console.log(setter);
  console.log(context);
}

class Person5 {
  name: string;

  constructor(
    name: string,
    private _age: number = 10,
  ) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @getter
  public get age() {
    return this._age;
  }

  @setter
  public set age(value) {
    this._age = value;
  }
}
