var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// SIMPLE DECORATOR
function mySimpleDecorator(originalMethod, context) {
    console.log("Always logs");
    function wrapper(...args) {
        console.log("Arguments received:", args);
        originalMethod(...args);
    }
    return wrapper;
}
class Robot {
    // @mySimpleDecorator
    sayHello(name) {
        console.log(`Hello, ${name}!`);
    }
}
const bot = new Robot();
bot.sayHello("Alice");
// USING THIS
console.log("\n", "// USING THIS");
function mySimpleDecorator2(originalMethod, context) {
    function wrapper(...args) {
        originalMethod.call(this, ...args);
    }
    return wrapper;
}
class Robot2 {
    model = "X-100";
    // @mySimpleDecorator2
    sayModel() {
        console.log(`My model is ${this.model}`);
    }
}
const bot2 = new Robot2();
bot2.sayModel();
// --- REPLACEMENT FUNCTION ---
console.log("\n", "// --- REPLACEMENT FUNCTION ---");
function methodLogger(originalMethod, _context) {
    console.log("Decorator Invoked");
    // The replacement function replaces the original method and when the original method is invoken then the replacement method is invoked instead of the original greet method.
    function replacementMethod(...args) {
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
    name;
    constructor(name) {
        this.name = name;
    }
    // @methodLogger
    greet(greeting) {
        console.log(` ${greeting}, ${this.name}`);
    }
}
let user = new Person("John");
user.greet("Hello");
// --- ADD INITIALIZER TO GREET ---
console.log("\n", "// --- ADD INITIALIZER TO GREET ---");
function methodLogger2(originalMethod, context) {
    //! STEP 2.1, CREATE VARIABLE FOR METHOD NAME
    const methodName = context.name;
    //! STEP 2.3: Add CONDITION FOR INITIALIZER
    if (context.private) {
        throw new Error(`'bound' cannot decorate private properties like ${methodName}.`);
    }
    //! STEP 2.2: ADD INITIALIZER
    // Runs inside the constructor of Person when an instance is created.
    // Binds the method to the instance (this), ensuring correct context.
    // Equivalent to manually binding inside the constructor
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
    function replacementMethod(...args) {
        console.log("Invocation Started (RM)");
        const result = originalMethod.call(this, ...args);
        console.log("Invocation ended");
        return result;
    }
    return replacementMethod;
}
class Person2 {
    name;
    constructor(name) {
        this.name = name;
        // STEP 3: IN JAVASCRIPT CONSTRUCTOR
        // this.greet = this.greet.bind(this);
    }
    // @methodLogger2
    greet(greeting) {
        //! PART OF STEP 1
        //* Console dir is a method that displays a list of the properties of the specified JavaScript object
        console.dir(this);
        console.log(` ${greeting}, ${this.name}`);
    }
}
console.log("\n", "-----");
let user2 = new Person2("John");
user.greet("Hello");
//! STEP 1: SEE THE PROBLEM
//! There will be a problem if greet is called as a standalone function
//! Reassigning greet to a separate variable to showcase the problem with the this keyword. You will see that this keword points to the Person class
const greet = user2.greet;
greet("Morning");
// --- BOUND ---
function methodLogger3(originalMethod, _context) {
    function replacementMethod(...args) {
        console.log("Invocation Started");
        const result = originalMethod.call(this, ...args);
        console.log("Invocation ended");
        return result;
    }
    return replacementMethod;
}
function bound(_originalMethod, context) {
    const methodName = context.name;
    if (context.private) {
        throw new Error(`'bound' cannot decorate private properties like ${methodName}.`);
    }
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
}
class Person3 {
    name;
    constructor(name) {
        this.name = name;
    }
    // @methodLogger3
    greet(greeting) {
        console.dir(this);
        console.log(` ${greeting}, ${this.name}`);
    }
}
__decorate([
    bound
    // @methodLogger3
], Person3.prototype, "greet", null);
let user3 = new Person3("John");
user3.greet("Hello");
const greet3 = user3.greet;
greet3("Morning");
// --- STRICT TYPING DECORATORS ---
//! STEP 2: Or second alternative could be that we use Generics, which makes the decorator strictly typed but increases the complexity of the code.
function methodLogger4(logPrefix) {
    return function (originalMethod, _context) {
        return function (...args) {
            console.log(`${logPrefix}: Invocation Started`);
            const result = originalMethod.call(this, ...args);
            console.log(`${logPrefix}: Invocation ended`);
            return result;
        };
    };
}
//! STEP 1: We can use simple Type declaration of Function, here this will remain as ANY
function bound4(_originalMethod, context) {
    const methodName = String(context.name);
    if (context.private) {
        throw new Error(`'bound' cannot decorate private properties like ${methodName}.`);
    }
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
}
class Person4 {
    name;
    constructor(name) {
        this.name = name;
    }
    //@methodLogger4("LOG")
    greet(greeting) {
        console.dir(this);
        console.log(` ${greeting}, ${this.name}`);
    }
}
__decorate([
    bound
    //@methodLogger4("LOG")
], Person4.prototype, "greet", null);
let user4 = new Person4("John");
user.greet("Hello");
const greet4 = user.greet;
greet("Morning");
// --- FIELD DECORATORS ---
//! You could use Value extends [] for liberal typing
function addDefaultPost(_target, _context) {
    return function (initialValue) {
        initialValue.push({
            title: "Defualt Title",
            content: "Default Content",
        });
        return initialValue;
    };
}
class Author2 {
    name;
    // @addDefaultPost
    posts = [];
    constructor(name) {
        this.name = name;
    }
    greet(greeting) {
        console.log(` ${greeting}, ${this.name}`);
    }
}
const author2 = new Author2("Mark");
console.log(author2.posts);
// --- CLASS DECORATORS ---
//! GENRIC CONSTRUCTOR TYPE TO BE USED FIRST IF NEED TO EXTEND ANY CLASS
// { new (...args: any[]): {} }
function addGreetMethod(baseClass, _context) {
    return class extends baseClass {
        constructor(...args) {
            super(...args);
            this.greet = (greeting) => {
                console.log(` ${greeting}, ${this.name}! Have a great day`);
            };
        }
    };
}
//! We will get an error without proper Generics in place
// @addGreetMethod
class Author {
    name;
    constructor(name) {
        this.name = name;
    }
}
const author = new Author("Mark");
console.log(author);
// --- DECORATORS FOR ACCESSORS AND MUTATORS ---
console.log("\n", "// --- DECORATORS FOR ACCESSORS AND MUTATORS");
function getter(getter, context) {
    console.log(getter);
    console.log(context);
}
function setter(setter, context) {
    console.log(setter);
    console.log(context);
}
class Person5 {
    _age;
    name;
    constructor(name, _age = 10) {
        this._age = _age;
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    // @getter
    get age() {
        return this._age;
    }
    // @setter
    set age(value) {
        this._age = value;
    }
}
// --- ENHANCING ACCESSOR DECORATORS ---
function getter2(getter, _context) {
    return function () {
        const result = getter.call(this);
        if (result > 18) {
            console.log("Person is an adult");
        }
        return result;
    };
}
function setter2(setter, _context) {
    return function (arg) {
        console.log(`Setting the age to ${arg}`);
        return setter.call(this, arg);
    };
}
class Person6 {
    _age;
    name;
    constructor(name, _age = 10) {
        this._age = _age;
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    // @getter2
    get age() {
        return this._age;
    }
    // @setter2
    set age(value) {
        this._age = value;
    }
}
const person = new Person6("Mark");
person.age = 20;
console.log(person.age);
export {};
//# sourceMappingURL=index.js.map