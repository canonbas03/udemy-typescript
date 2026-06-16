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
export {};
//# sourceMappingURL=index.js.map