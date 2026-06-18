var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
// SIMPLE DECORATOR
function mySimpleDecorator(originalMethod, context) {
    function wrapper(...args) {
        console.log("Arguments received:", args);
        originalMethod(...args);
    }
    return wrapper;
}
let Robot = (() => {
    let _instanceExtraInitializers = [];
    let _sayHello_decorators;
    return class Robot {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sayHello_decorators = [mySimpleDecorator];
            __esDecorate(this, null, _sayHello_decorators, { kind: "method", name: "sayHello", static: false, private: false, access: { has: obj => "sayHello" in obj, get: obj => obj.sayHello }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        sayHello(name) {
            console.log(`Hello, ${name}!`);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
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
let Robot2 = (() => {
    let _instanceExtraInitializers = [];
    let _sayModel_decorators;
    return class Robot2 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sayModel_decorators = [mySimpleDecorator2];
            __esDecorate(this, null, _sayModel_decorators, { kind: "method", name: "sayModel", static: false, private: false, access: { has: obj => "sayModel" in obj, get: obj => obj.sayModel }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        model = (__runInitializers(this, _instanceExtraInitializers), "X-100");
        sayModel() {
            console.log(`My model is ${this.model}`);
        }
    };
})();
const bot2 = new Robot2();
bot2.sayModel();
// --- REPLACEMENT FUNCTION ---
console.log("\n");
function methodLogger(originalMethod, _context) {
    console.log("Decorator Invoked");
    //! The replacement function replaces the original method and when the original method is invoken then the replacement method is invoked instead of the original greet method.
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
let Person = (() => {
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    return class Person {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [methodLogger];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        constructor(name) {
            this.name = name;
        }
        greet(greeting) {
            console.log(` ${greeting}, ${this.name}`);
        }
    };
})();
let user = new Person("John");
user.greet("Hello");
// --- ADD INITIALIZER TO GREET ---
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
    // Equivalent to manually binding inside the constructor:
    // typescript
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
    function replacementMethod(...args) {
        console.log("Invocation Started");
        const result = originalMethod.call(this, ...args);
        console.log("Invocation ended");
        return result;
    }
    return replacementMethod;
}
let Person2 = (() => {
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    return class Person2 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [methodLogger2];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        constructor(name) {
            this.name = name;
            //! STEP 3: THIS IS HOW YOU WOULD HAVE DONE IT IN JAVASCRIPT CONSTRUCTOR
            // this.greet = this.greet.bind(this);
        }
        greet(greeting) {
            //! PART OF STEP 1
            //* Console dir is a method that displays a list of the properties of the specified JavaScript object
            console.dir(this);
            console.log(` ${greeting}, ${this.name}`);
        }
    };
})();
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
let Person3 = (() => {
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    return class Person3 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [bound, methodLogger3];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        constructor(name) {
            this.name = name;
        }
        greet(greeting) {
            console.dir(this);
            console.log(` ${greeting}, ${this.name}`);
        }
    };
})();
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
let Person4 = (() => {
    let _instanceExtraInitializers = [];
    let _greet_decorators;
    return class Person4 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [bound, methodLogger4("LOG")];
            __esDecorate(this, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        constructor(name) {
            this.name = name;
        }
        greet(greeting) {
            console.dir(this);
            console.log(` ${greeting}, ${this.name}`);
        }
    };
})();
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
let Author2 = (() => {
    let _posts_decorators;
    let _posts_initializers = [];
    let _posts_extraInitializers = [];
    return class Author2 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _posts_decorators = [addDefaultPost];
            __esDecorate(null, null, _posts_decorators, { kind: "field", name: "posts", static: false, private: false, access: { has: obj => "posts" in obj, get: obj => obj.posts, set: (obj, value) => { obj.posts = value; } }, metadata: _metadata }, _posts_initializers, _posts_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name;
        posts = __runInitializers(this, _posts_initializers, []);
        constructor(name) {
            __runInitializers(this, _posts_extraInitializers);
            this.name = name;
        }
        greet(greeting) {
            console.log(` ${greeting}, ${this.name}`);
        }
    };
})();
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
let Author = (() => {
    let _classDecorators = [addGreetMethod];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Author = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Author = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        name;
        constructor(name) {
            this.name = name;
        }
    };
    return Author = _classThis;
})();
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
let Person5 = (() => {
    let _instanceExtraInitializers = [];
    let _get_age_decorators;
    let _set_age_decorators;
    return class Person5 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_age_decorators = [getter];
            _set_age_decorators = [setter];
            __esDecorate(this, null, _get_age_decorators, { kind: "getter", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _set_age_decorators, { kind: "setter", name: "age", static: false, private: false, access: { has: obj => "age" in obj, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        _age = __runInitializers(this, _instanceExtraInitializers);
        name;
        constructor(name, _age = 10) {
            this._age = _age;
            this.name = name;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    };
})();
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
let Person6 = (() => {
    let _instanceExtraInitializers = [];
    let _get_age_decorators;
    let _set_age_decorators;
    return class Person6 {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _get_age_decorators = [getter2];
            _set_age_decorators = [setter2];
            __esDecorate(this, null, _get_age_decorators, { kind: "getter", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _set_age_decorators, { kind: "setter", name: "age", static: false, private: false, access: { has: obj => "age" in obj, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        _age = __runInitializers(this, _instanceExtraInitializers);
        name;
        constructor(name, _age = 10) {
            this._age = _age;
            this.name = name;
        }
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
        get age() {
            return this._age;
        }
        set age(value) {
            this._age = value;
        }
    };
})();
const person = new Person6("Mark");
person.age = 20;
console.log(person.age);
export {};
//# sourceMappingURL=index.js.map