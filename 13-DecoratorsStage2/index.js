/*
// FIRST DECORATOR
function FirstDecorator(name: string) {
  return function (constructor: Function) {
    console.log(`The decorator: ${name} is invoked`);
    console.log(constructor);
    console.log("Constructor name: ", constructor.name); // Airplane
    console.log("Constructor length: ", constructor.length); // 2 args
  };
}

@FirstDecorator("First Decorator")
class Airplane {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Airplane class instantiated");
  }

  public get pilotName() {
    return this.pilot;
  }
}

const airplane = new Airplane("Airbus-744", "Petar Petrov");
// */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
// DECORATORS WITH PROTOTYPES
enum Manufacturers {
  airbus = "airbus",
  boeing = "boeing",
}

function AircraftManufacturers(manufacturer: Manufacturers) {
  // Decorator Factory
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
    }
  };
}

// All of those instances will have airbus as a manufactorer
@AircraftManufacturers(Manufacturers.airbus)
class Airplane {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Airplane class instantiated");
  }

  public get pilotName() {
    return this.pilot;
  }
}

const airplane = new Airplane("Airbus-744", "Petar Petrov");
console.log(airplane);

// */
/*
// ADDING FUNCTIONS TO PROTOTYPES
enum Manufacturers {
  airbus = "airbus",
  boeing = "boeing",
}

interface AircraftInterface {
  aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function performed by Airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
      target.prototype.boeingMethod = () => {
        console.log("Function performed by Boeing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Airplane class instantiated");
  }

  public get pilotName() {
    return this.pilot;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus-744", "Petar Petrov");
console.log(airplane);
console.log(airplane.manufacturer);

// If the method exists - invoke it, else log message
airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("Method does not exist");
// */
/*
// USING THE SAME DECORATOR ON MULTIPLE CLASSES
enum Manufacturers {
  airbus = "airbus",
  boeing = "boeing",
}

interface AircraftInterface {
  aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
      target.prototype.airbusMethod = () => {
        console.log("Function performed by Airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
      target.prototype.boeingMethod = () => {
        console.log("Function performed by Boeing");
      };
    }
  };
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {}

  public get pilotName() {
    return this.pilot;
  }
}

@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {}

  public get pilotName() {
    return this.pilot;
  }
}

const airplane: AircraftInterface = new Airplane("Airbus-744", "Petar Petrov");

// If the method exists - invoke it, else log message
airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log("Method does not exist");

const helicopter: AircraftInterface = new Helicopter("Boeing 744", "Vladimir");
console.log(airplane);
console.log(airplane.manufacturer);

console.log(airplane);
console.log(helicopter);
// */
/*
// METHOD DECORATORS
interface AircraftInterface {
  aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = false;
}

class Airplane implements AircraftInterface {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {}

  @MethodDecorator
  public pilotName() {
    console.log(this.pilot);
  }
}

const airplane: AircraftInterface = new Airplane("Airbus-744", "Petar Petrov");

airplane.pilotName = () => console.log("Function Changed");
// index.ts:246 Uncaught TypeError: Cannot assign to read only property 'pilotName' of object '#<Airplane>'

airplane.pilotName();

// */
/*
// STATIC METHOD DECORATORS
interface AircraftInterface {
  aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function StaticMethodDecorator(
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = false;
}

class Airplane implements AircraftInterface {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {}

  @StaticMethodDecorator
  public static seatCount(): void {
    console.log("Seats: 150");
  }

  public pilotName() {
    console.log(this.pilot);
  }
}

const airplane: AircraftInterface = new Airplane("Airbus-744", "Petar Petrov");

// */
/*
// DECORATORS FOR METHOD PARAMETERS
function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number,
) {
  console.log(classPrototype);
  console.log(methodName);

  // Position of the parameter in the func definition
  console.log(index);
}

class Airplane {
  constructor(public aircraftModel: string) {}

  public static seatCount(): void {
    console.log("Seats: 150");
  }

  public pilotName(@ParameterDecorator name: string, lastName: string) {
    console.log(name);
  }
}

const airplane = new Airplane("Airbus-744");

// */
/*
// DECORATORS FOR CLASS PROPERTIES AND ACCESSORS
// If the property is an instance member we pass a prototype, if static member - the constructor
function PropertyDecorator(classPrototype: Object, propertyName: string) {
  console.log(classPrototype);
  console.log(propertyName);
}

function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor,
) {
  console.log(classPrototype);
  console.log(accessorName);
  console.log(propertyDescriptor);
}

class Airplane {
  @PropertyDecorator
  private _aircraftModel: string;

  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
  }

  public static seatCount(): void {
    console.log("Seats: 150");
  }

  public pilotName(name: string, lastName: string) {
    console.log(name);
  }

  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane = new Airplane("Airbus-744");
console.log(airplane.aircraftModel);

// */
/*/

// RETURNING VALUES FROM CLASS DECORATORS
interface MapLocation {
  lat: number;
  long: number;
}

function AddLocation(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(classConstructor: T) => {
    return class extends classConstructor {
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

@AddLocation(1.234, 1.876)
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const person: Person = new Person("John", 32);
console.log(person);

// */
//*/
// DECORATOR COMPOSITION AND EVALUATION
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second()
], ExampleClass.prototype, "method", null);
export {};
// Evaluation: top to bottom
// Composition: bottom to top
// */
//# sourceMappingURL=index.js.map